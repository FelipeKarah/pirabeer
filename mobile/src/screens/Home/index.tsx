import React, { useEffect, useState } from "react";
import { Image, FlatList, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import logoImg from "../../assets/logo.png";
import { Heading } from "../../components/Heading";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { SaleCard } from "../../components/SaleCard";
import api from "../../services/api/api";
import { Products } from "../../interfaces/Products";

export function Home() {
  const [products, setProducts] = useState<Products[]>([]);
  const navigation = useNavigation();

  function handleOpenProduct(item: Products) {
    navigation.navigate("productDetails", item);
  }

  useEffect(() => {
    api
      .get(`/products`, { params: { status: "Ativo", sale: true } })
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Background>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image source={logoImg} style={styles.logo} />

          { products.length > 0 &&
            <>
              <Heading title="Promoções da Semana!" subtitle="Aproveite já!" />

              <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <SaleCard
                    data={item}
                    onPress={() => handleOpenProduct(item)}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentList}
              />
            </>
          }
        </SafeAreaView>
      </ScrollView>
    </Background>
  );
}
