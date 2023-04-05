import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Background } from "../../components/Background";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { THEME } from "../../theme";
import logoImg from "../../assets/logo.png";
import { Heading } from "../../components/Heading";
import { useState } from "react";
import { DuoInfo } from "../../components/DuoInfo";
import { convertStringBRL } from "../../utils/currency";
import api from "../../services/api/api";
import { useAuth } from "../../contexts/auth";
import { Products } from "../../interfaces/Products";
import {
  convertDateToString,
  convertIsoDateToPtBr,
} from "../../utils/date/inde";

export function ProductDetails() {
  const [count, setCount] = useState(0);

  const { user } = useAuth();

  const navigation = useNavigation();

  const route = useRoute();
  const product = route.params as Products;

  function handleGoBack() {
    navigation.goBack();
  }

  async function addProductsToCart(keepShopping: boolean) {
    if (count == 0) {
      alert("Informe a quantidade que deseja!");
      return;
    }

    try {
      let produtos: any[] = [];
      await api
        .get(`/${user?.id}/carts`)
        .then((response) => (produtos = response.data))
        .catch((error) => console.log(error));

      const _includes = produtos.filter((produto) =>
        produto.productId.includes(product.id)
      );

      if (_includes.length > 0) {
        try {
          api.put(`/carts/${_includes[0].id}`, {
            params: {
              amount: _includes[0].amount + count,
            },
          });
          alert("Item adicionado ao carrinho com sucesso!");
        } catch (err) {
          console.log(err);
          alert("Erro ao adicionar Item no carrinho!");
        }

        if (keepShopping == true) {
          navigation.navigate("listenProduct");
        } else {
          navigation.navigate("Carrinho");
        }

        return;
      }

      api.post(`/carts`, {
        params: {
          userId: user?.id,
          productId: product.id,
          amount: count,
        },
      });

      alert("Item adicionado ao carrinho com sucesso!");

      if (keepShopping == true) {
        navigation.navigate("listenProduct");
      } else {
        navigation.navigate("Carrinho");
      }
    } catch (err) {
      console.log(err);
      alert("Erro ao adicionar Item no carrinho!");
    }
  }

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo
                name="chevron-thin-left"
                color={THEME.COLORS.CAPTION_300}
                size={20}
              />
            </TouchableOpacity>

            <Image source={logoImg} style={styles.logo} />
            <View style={styles.right} />
          </View>

          <Image
            source={{ uri: product.bannerUrl }}
            style={styles.cover}
            resizeMode="cover"
          />

          <Heading title={product.title} subtitle="" />

          {product.sale && (
            <View style={styles.containerSale}>
              <Fontisto
                name="shopping-sale"
                size={30}
                style={styles.iconSale}
              />
              <Text style={styles.label}>Produto em promoção !</Text>
              <Text style={styles.value}>
                {`Oferta Válida até: ${convertIsoDateToPtBr(
                  (product?.dtSale).toString()
                )}`}
              </Text>
            </View>
          )}

          <View style={styles.containerList}>
            <DuoInfo label="Marca" value={`${product.brand}`} />

            <DuoInfo label="Categoria" value={`${product.category.title}`} />

            <DuoInfo label="Kit Chopeira" value={product.kit ? "Sim" : "Não"} />

            <Text
              style={[
                styles.value,
                product.amount > 0
                  ? { color: THEME.COLORS.SUCCESS }
                  : { color: THEME.COLORS.CAPTION_300 },
              ]}
              numberOfLines={1}
            >
              {product.amount > 0 ? "Disponivel" : "Indisponivel"}
            </Text>
          </View>

          <View style={styles.containerList}>
            <Text style={styles.label}>Adicionar ao Carrinho</Text>
            <View style={styles.currency}>
              {product.sale ? (
                <Text style={styles.textSale}>
                  R$ {convertStringBRL(product.vlSale)}
                </Text>
              ) : (
                <Text></Text>
              )}
              <Text style={styles.label}>
                R$ {convertStringBRL(product.value)}
              </Text>
            </View>

            <View style={styles.contentButton}>
              <TouchableOpacity
                style={[
                  styles.buttonCartDecrement,
                  count == 0
                    ? { backgroundColor: THEME.COLORS.CAPTION_500 }
                    : { backgroundColor: THEME.COLORS.PRIMARY },
                ]}
                disabled={count == 0 || product.amount == 0}
                onPress={() => setCount(count - 1)}
              >
                <Entypo
                  name="minus"
                  size={34}
                  color="#FFF"
                  style={styles.iconButtonCart}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                value={JSON.stringify(count)}
                placeholderTextColor={THEME.COLORS.CAPTION_400}
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={[
                  styles.buttonCartIncrement,
                  product.amount == 0
                    ? { backgroundColor: THEME.COLORS.CAPTION_500 }
                    : { backgroundColor: THEME.COLORS.PRIMARY },
                ]}
                onPress={() => setCount(count + 1)}
                disabled={product.amount == 0}
              >
                <Entypo
                  name="plus"
                  size={34}
                  color="#FFF"
                  style={styles.iconButtonCart}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.total}>
              <Text style={styles.label}>Total</Text>
              <Text style={styles.valueTotal}>
                R$ {convertStringBRL(parseFloat(product.value) * count)}
              </Text>
            </View>
          </View>

          <View style={styles.containerButtons}>
            <TouchableOpacity
              onPress={() => addProductsToCart(false)}
              style={[
                styles.buttonShoppingCart,
                { backgroundColor: THEME.COLORS.PRIMARY },
              ]}
            >
              <Text style={styles.label}>Carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => addProductsToCart(true)}
              style={[
                styles.buttonShoppingCart,
                { backgroundColor: THEME.COLORS.OVERLAY },
              ]}
            >
              <Text style={styles.label}>Continuar Comprando</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </Background>
  );
}
