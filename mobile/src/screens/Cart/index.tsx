import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Background } from "../../components/Background";
import logoImg from "../../assets/logo.png";
import {
  Fontisto,
  Entypo,
  Feather,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

import { styles } from "./styles";
import api from "../../services/api/api";
import { THEME } from "../../theme";
import { useAuth } from "../../contexts/auth";
import { convertStringBRL } from "../../utils/currency";
import { useNavigation } from "@react-navigation/native";
import { ModalAddress } from "../../components/ModalAddress";
import { Products } from "../../interfaces/Products";
import { Address } from "../../interfaces/Address";
import { Loading } from "../../components/Loading";
import { calculateDistance } from "../../services/maps/calculateDistance";
import { ModalConfirmation } from "../../components/ModalConfirmation";
import { EmptyContent } from "../../components/EmptyContent";
import { Request } from "../../interfaces/Request";

export function Cart() {
  const [productsCart, setProductsCart] = useState<any[]>([]);
  const [inDelivery, setInDelivery] = useState<string>("RECEBER");
  const [temperature, setTemperature] = useState<string>("GELADO");
  const [amountCart, setAmountCart] = useState<number>(1000);
  const [valueFrete, setValueFrete] = useState<string>("00,00");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [confirmedRequest, setConfirmedRequest] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Products>(
    {} as Products
  );

  const [selectedAddress, setSelectedAddress] = useState<Address>(
    {} as Address
  );
  const [loadingAddress, setLoadingAddress] = useState<boolean>(false);

  let valueLiquid: number = 0;

  const navigation = useNavigation();

  const { user } = useAuth();

  async function incrementProduct(item: any) {
    try {
      await api.put(`/carts/${item.id}`, {
        params: {
          amount: item.amount + 1,
        },
      });
      setAmountCart(amountCart + 1);
    } catch (err) {
      console.log(err);
    }
  }

  async function decrementProduct(item: any) {
    if (item.amount == 0) {
      return;
    }

    try {
      await api.put(`/carts/${item.id}`, {
        params: {
          amount: item.amount - 1,
        },
      });
      setAmountCart(amountCart - 1);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct() {
    try {
      await api.delete(`/carts/${selectedProduct.id}`);
      setAmountCart(amountCart + 1);
      setConfirmed(false);
    } catch (err) {
      console.log(err);
    }
  }

  function handleOpenProduct(item: Products) {
    navigation.navigate("productDetails", item);
  }

  function liquidValueProduct() {
    valueLiquid = 0;

    productsCart.map((product) => {
      valueLiquid = valueLiquid + product.products.value * product.amount;
    });

    return valueLiquid;
  }

  function totalValueProduct() {
    let valueTotal = 0;

    valueTotal = parseFloat(valueFrete) + liquidValueProduct();

    return valueTotal;
  }

  async function saveRequest(){
    setLoaded(true);
    const request: Partial<Request> = {
      userId : user?.id ?? '',
      freightage: inDelivery,
      temperature: temperature,
      addressDeliveryId: selectedAddress.id,
      note: '',
      cupomId: '',
      value: valueLiquid.toString(),
      valueFrete: valueFrete.toString(),
      status:'Separando'
    }

    const orderData = {...request, products: productsCart};

    try{
      await api.post(`/${user?.id}/request`, { 
        params : orderData
      }).then((response) => {
        if(response.status == 201){
          setLoaded(false);
          setConfirmedRequest(false);
          navigation.navigate("listenRequest");
          return;
        }
        setLoaded(false);
        alert('Não foi possivel salvar o seu pedido, favor tente mais tarde!')
      })
    } catch(err) {
      setLoaded(false);
      setConfirmedRequest(false);
      console.log(err);
    }

  }


  useEffect(() => {
    api
      .get(`/${user?.id}/carts`, { params: { status: "Ativo" } })
      .then((response) => setProductsCart(response.data))
      .catch((error) => console.log(error));
  }, [amountCart, {}]);

  useEffect(() => {
    (async () => {
      setLoadingAddress(true);
      await api
        .get(`/${user?.id}/address`, { params: { status: "Ativo" } })
        .then((response) => setSelectedAddress(response.data[0]))
        .catch((error) => console.log(error));
    })();

    setLoadingAddress(false);
  }, []);

  useEffect(() => {
    (async () => {
      const distance = await calculateDistance(
        selectedAddress?.latitude,
        selectedAddress?.longitude,
        selectedAddress?.city ?? selectedAddress?.district
      );

      setValueFrete(distance);
    })();
  }, [selectedAddress?.latitude]);

  return (
    <View style={styles.container}>
      <Background>
        { productsCart.length == 0 ? <EmptyContent title="Nenhum produto no carrinho!"/> :<ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.logo} />
          </View>

          <View style={{ padding: 10 }}>
            {productsCart.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleOpenProduct(item.products)}
                >
                  <View style={styles.content}>
                    <ImageBackground
                      style={styles.cover}
                      source={{ uri: item?.products?.bannerUrl }}
                    ></ImageBackground>
                    <View style={styles.description}>
                      <Text style={styles.title}>{item?.products?.title}</Text>
                      <Text style={styles.features}>
                        {" "}
                        Marca: {item?.products?.brand}
                      </Text>
                      <Text style={styles.features}>
                        {" "}
                        Categoria: {item?.products?.category?.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginRight: 10,
                        }}
                      >
                        <Text style={styles.value}>
                          {" "}
                          R$ {convertStringBRL(item?.products?.value)}
                        </Text>
                        <Text
                          style={[
                            styles.value,
                            { color: THEME.COLORS.PRIMARY },
                          ]}
                        >
                          {" "}
                          R${" "}
                          {convertStringBRL(
                            item?.products?.value * item?.amount
                          )}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={styles.buttonCartDecrement}
                        onPress={() => decrementProduct(item)}
                      >
                        <Entypo
                          name="minus"
                          size={18}
                          color="#FFF"
                          style={styles.iconButtonCart}
                        />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.input}
                        placeholderTextColor={THEME.COLORS.CAPTION_400}
                        editable={false}
                        value={JSON.stringify(item?.amount)}
                        keyboardType="numeric"
                      />
                      <TouchableOpacity
                        style={styles.buttonCartIncrement}
                        onPress={() => incrementProduct(item)}
                      >
                        <Entypo
                          name="plus"
                          size={18}
                          color="#FFF"
                          style={styles.iconButtonCart}
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={styles.buttonRemoveProduct}
                      onPress={() => {
                        setConfirmed(true), setSelectedProduct(item);
                      }}
                    >
                      <MaterialIcons
                        name="delete"
                        size={20}
                        color="#FFF"
                        style={styles.iconButtonCart}
                      />
                    </TouchableOpacity>
                    {item?.products?.sale && (
                      <Fontisto
                        name="shopping-sale"
                        size={20}
                        style={styles.iconSale}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.contentRadius}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonRadio}
                onPress={() => setInDelivery("RETIRAR")}
              >
                {inDelivery === "RETIRAR" && (
                  <FontAwesome
                    name="check-square"
                    size={20}
                    color={THEME.COLORS.PRIMARY}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={styles.title}
                onPress={() => setInDelivery("RETIRAR")}
              >
                Retirar
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonRadio}
                onPress={() => setInDelivery("RECEBER")}
              >
                {inDelivery === "RECEBER" && (
                  <FontAwesome
                    name="check-square"
                    size={20}
                    color={THEME.COLORS.PRIMARY}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={styles.title}
                onPress={() => setInDelivery("RECEBER")}
              >
                Receber
              </Text>
            </View>
          </View>

          <View style={styles.contentAddress}>
            <View style={styles.descriptionAddres}>
              {loadingAddress ? (
                <Loading />
              ) : (
                <>
                  <Entypo
                    name="location"
                    size={50}
                    color="#FFF"
                    style={{ marginRight: 8, textAlignVertical: "center" }}
                  />
                  <View>
                    {inDelivery == "RECEBER" && (
                      <>
                        <Text style={styles.title}>
                          {selectedAddress?.place}, Nº {selectedAddress?.number}
                          , {selectedAddress?.district}, {selectedAddress?.city}
                          , {selectedAddress?.state} - CEP{" "}
                          {selectedAddress?.cep}
                        </Text>
                        <TouchableOpacity onPress={() => setOpenModal(true)}>
                          <Text style={styles.featuresAddress}> Alterar</Text>
                        </TouchableOpacity>
                      </>
                    )}
                    {inDelivery == "RETIRAR" && (
                      <>
                        <Text style={styles.title}>
                          Rua Aldilei Augusto Furlan, Santa Rosa Ipês,
                          Piracicaba, São Paulo- CEP 13414330
                        </Text>
                      </>
                    )}
                  </View>
                </>
              )}
            </View>
          </View>

          <View style={styles.contentRadius}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonRadio}
                onPress={() => setTemperature("NATURAL")}
              >
                {temperature === "NATURAL" && (
                  <FontAwesome
                    name="check-square"
                    size={20}
                    color={THEME.COLORS.PRIMARY}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={styles.title}
                onPress={() => setTemperature("NATURAL")}
              >
                Natural
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonRadio}
                onPress={() => setTemperature("GELADO")}
              >
                {temperature === "GELADO" && (
                  <FontAwesome
                    name="check-square"
                    size={20}
                    color={THEME.COLORS.PRIMARY}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={styles.title}
                onPress={() => setTemperature("GELADO")}
              >
                Gelado
              </Text>
            </View>
          </View>
          <View style={styles.contentAddress}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.title}> Valor Liquido:</Text>
              <Text style={styles.title}>
                R$ {convertStringBRL(liquidValueProduct())}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.title}> Frete:</Text>
              <Text style={styles.title}>
                {" "}
                R$ {convertStringBRL(valueFrete)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: THEME.COLORS.CAPTION_300,
              }}
            >
              <Text style={styles.title}> Desconto:</Text>
              <Text style={styles.title}>R$ 0,00</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.title}> Total:</Text>
              <Text style={[styles.title, { color: THEME.COLORS.PRIMARY }]}>
                R$ {convertStringBRL(totalValueProduct())}
              </Text>
            </View>
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity
              onPress={() => setConfirmedRequest(true)}
              style={[
                styles.buttonShoppingCart,
                { backgroundColor: THEME.COLORS.SHAPE },
              ]}
            >
              <Text style={styles.title}>Finalizar Pedido</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        }
        <ModalAddress
          visible={openModal}
          discord={"productsCart"}
          onClose={() => setOpenModal(false)}
          selectAddress={(item) => {
            setSelectedAddress(item), setOpenModal(false);
          }}
        />
        <ModalConfirmation
          visible={confirmed}
          onClose={() => setConfirmed(false)}
          onConfirmed={() => deleteProduct()}
        />
        <ModalConfirmation
          visible={confirmedRequest}
          onClose={() => setConfirmedRequest(false)}
          title='Deseja finalizar o pedido?'
          subtitle="Após a confirmação estaremos preparando seu pedido!"
          colorIcon='SUCCESS'
          iconName='assignment-turned-in'
          onConfirmed={() => saveRequest()}
          loading={loaded}
        />
      </Background>
    </View>
  );
}
