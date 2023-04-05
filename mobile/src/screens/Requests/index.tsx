import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { Request } from "./../../interfaces/Request";
import { styles } from "./styles";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api/api";
import { dayMonth, month } from "../../utils/date/inde";
import logoImg from "../../assets/logo.png";
import { EmptyContent } from "../../components/EmptyContent";
import { useNavigation } from "@react-navigation/native";

export function Requests() {
  const [requests, setRequests] = useState<Request[]>([]);
  const navigation = useNavigation();
  const { user } = useAuth();
  useEffect(() => {
    api
      .get(`/${user?.id}/requests`)
      .then((response) => setRequests(response.data))
      .catch((error) => console.log(error));
  }, [{}]);

  function handleOpenDetails(request: Request){
    navigation.navigate("listenRequestDetails", request);
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} style={styles.logo} />
          <Text style={styles.headerTitle}>Meus Pedidos</Text>
          <View style={styles.right} />
        </View>

        {requests.length == 0 ? (
          <EmptyContent title="Nenhum pedido encontrado!" />
        ) : (
          <FlatList
            data={requests}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleOpenDetails(item)}
              >
                <View style={styles.contentCard} key={item.id}>
                  <View style={styles.contentCircle}>
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.descriptionDay}>
                        {dayMonth(item.createdAt.toString())}
                      </Text>
                      <Text style={styles.descriptionMonth}>
                        {month(item.createdAt.toString())}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.contentDescription}>
                    <Text style={styles.description}>PEDIDO Nº {item.cod}</Text>
                    <Text style={styles.description}>
                      {item?.address?.place}, Nº {item?.address?.number},{" "}
                      {item?.address?.district}, {item?.address?.city},{" "}
                      {item?.address?.state} - CEP {item?.address?.cep}
                    </Text>
                    <Text style={styles.description}>
                      {item.productsRequest.length}
                      {item.productsRequest.length > 1
                        ? " Produtos"
                        : " Produto"}
                    </Text>
                    <Text style={styles.descriptionStatus}>
                      {item.status}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </Background>
  );
}
