import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import logoImg from "../../assets/logo.png";

import { styles } from "./styles";
import { CategoryCard } from "../../components/CategoryCard";
import InputSearch from "../../components/InputSearch";
import { SaleCardProps } from "../../components/SaleCard";
import { ProductCard } from "../../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api/api";
import { getParams } from "../../utils/getParams";
import { Products } from "../../interfaces/Products";
import { EmptyContent } from "../../components/EmptyContent";

export function ListProducts() {
  const [categories, setCategories] = useState<SaleCardProps[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [search, setSearch] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigation = useNavigation();

  function handleOpenProduct(item: Products) {
    navigation.navigate("productDetails", item);
  }

  function handleCategory(id: string) {
    if (id === selectedCategory) {
      setSelectedCategory("");
      return;
    }

    setSelectedCategory(id);
  }

  useEffect(() => {
    api
      .get(`/products`, {
        params: getParams({
          status: "Ativo",
          categoryId: selectedCategory,
          title: search,
        }),
      })
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, [selectedCategory, search]);

  useEffect(() => {
    api
      .get(`/categories`, { params: { status: "Ativo" } })
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.logo} />
            <Text style={styles.headerTitle}>Produtos</Text>
            <View style={styles.right} />
          </View>
            <FlatList
              data={categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CategoryCard
                  data={item}
                  onPress={() => handleCategory(item.id)}
                  active={item.id == selectedCategory ? true : false}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentList}
            />
            <InputSearch
              placeholder="Pesquisar"
              value={search}
              onChangeText={setSearch}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
            />

          {products.length == 0 ? (
            <EmptyContent title="Nenhum produto encontrado!" />
          ) : (
            <View style={{ flex: 1 }}>
              {products.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    data={item}
                    onPress={() => handleOpenProduct(item)}
                  />
                );
              })}
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    </Background>
  );
}
