import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import logoImg from "../../assets/logo.png";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Request } from "../../interfaces/Request";
import { convertStringBRL } from "../../utils/currency";
import { convertIsoDateToPtBr } from "../../utils/date/inde";

export function RequestDetails() {
  const navigation = useNavigation();

  const route = useRoute();
  const request = route.params as Request;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
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
          <Text style={styles.headerTitle}>Pedido {request.cod} </Text>
          <View style={styles.right} />
        </View>
        {/* STATUS */}
        <View style={styles.containerStatus}>
          <View>
            <View
              style={[
                styles.backgroundStatus,
                { backgroundColor: THEME.COLORS.PRIMARY },
              ]}
            >
              <Entypo
                name="dropbox"
                size={18}
                style={styles.iconStatus}
                color="#FFF"
              />
            </View>
            <Text
              style={[
                styles.descriptionStatus,
                { color: THEME.COLORS.PRIMARY },
              ]}
            >
              SEPARANDO
            </Text>
          </View>
          <View style={styles.lineStatus}></View>
          <View>
            <View style={styles.backgroundStatus}>
              <MaterialCommunityIcons
                name={
                  request.freightage == "RECEBER"
                    ? "truck-delivery"
                    : "store-clock"
                }
                size={18}
                style={styles.iconStatus}
                color="#FFF"
              />
            </View>
            <Text style={styles.descriptionStatus}>
              {request.freightage == "RECEBER" ? "A CAMINHO" : "AG.RETIRADA"}
            </Text>
          </View>
          <View style={styles.lineStatus}></View>
          <View>
            <View style={styles.backgroundStatus}>
              <Entypo
                name="check"
                size={18}
                style={styles.iconStatus}
                color="#FFF"
              />
            </View>
            <Text style={styles.descriptionStatus}>CONCLUÍDO</Text>
          </View>
        </View>
        {/* DETAILS */}
        <View style={styles.contentDetails}>
          <Text style={styles.description}>
            Data do Pedido:{" "}
            {convertIsoDateToPtBr((request?.createdAt).toString(), true)}
          </Text>
          {request?.expectedDelivery != null ?? (
            <Text style={styles.description}>
              Data Prevista para entrega:{" "}
              {convertIsoDateToPtBr(
                (request?.expectedDelivery).toString(),
                true
              )}
            </Text>
          )}
          {request?.dateDelivery != null ?? (
            <Text style={styles.description}>
              Data da entrega:
              {convertIsoDateToPtBr((request?.dateDelivery).toString(), true)}
            </Text>
          )}

          <Text style={styles.descriptionObservation}>
            Observação: {request.freightage} OS PRODUTOS {request.temperature}
          </Text>
        </View>
        {/* VALUES */}
        <View style={styles.contentValue}>
          <Text style={styles.description}>
            SubTotal: R$ {convertStringBRL(request.value)}
          </Text>
          <Text style={styles.description}>
            Frete: R$ {convertStringBRL(parseFloat(request.valueFrete))}
          </Text>
        </View>
        <Text style={styles.descriptionTotal}>
          Total: R${" "}
          {convertStringBRL(
            parseFloat(request.value) + parseFloat(request.valueFrete)
          )}
        </Text>
        {/* ADDRESS */}
        <View style={styles.contentAddress}>
          <Entypo
            name="location"
            size={20}
            color="#FFF"
            style={{ marginRight: 8, textAlignVertical: "center" }}
          />
          {request.freightage == "RETIRAR" ? (
            <Text style={styles.description}>
              Rua Aldilei Augusto Furlan, Santa Rosa Ipês, Piracicaba, São
              Paulo- CEP 13414330
            </Text>
          ) : (
            <Text style={styles.description}>
              {request.address?.place}, Nº {request.address?.number},{" "}
              {request.address?.district}, {request.address?.city},{" "}
              {request.address?.state} - CEP {request.address?.cep}
            </Text>
          )}
        </View>
        {/* PRODUCTS */}
        <FlatList
          data={request.productsRequest}
          keyExtractor={(item) => item.id}
          style={styles.contentProducts}
          renderItem={({ item }) => (
            <View style={styles.contentCardProduct}>
              <ImageBackground
                style={styles.cover}
                source={{ uri: item.produtos.bannerUrl }}
              ></ImageBackground>
              <View style={styles.descriptionCard}>
                <Text style={styles.description}>{item.produtos.title}</Text>
                <Text style={styles.value}>
                  {" "}
                  {item.amount} X R$ {convertStringBRL(item.value)}
                </Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
