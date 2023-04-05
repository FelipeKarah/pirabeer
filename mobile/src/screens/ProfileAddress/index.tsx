import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Background } from "../../components/Background";
import { useAuth } from "../../contexts/auth";
import { Address } from "../../interfaces/Address";
import api from "../../services/api/api";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export function ProfileAddress() {
  const [address, setAddress] = useState<Address[]>([]);
  const { user } = useAuth();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    api
      .get(`/${user?.id}/address`, { params: { status: "Ativo" } })
      .then((response) => setAddress(response.data))
      .catch((error) => console.log(error));
  }, []);

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
          <Text style={styles.headerTitle}>Endereços </Text>
          <View style={styles.right} />
        </View>
        <FlatList
          data={address}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#FFF",
                borderRadius: 8,
                marginBottom:8
              }}
            >
              <View style={styles.descriptionAddres}>
                <Entypo
                  name="location"
                  size={20}
                  color="#FFF"
                  style={{ marginRight: 8, textAlignVertical: "center" }}
                />
                <View>
                  <Text style={styles.label}>
                    {item?.place}, Nº {item?.number}, {item?.district},{" "}
                    {item?.city}, {item?.state} - CEP {item?.cep}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.buttonRemoveProduct}
                onPress={() => {}}
              >
                <MaterialIcons
                  name="delete"
                  size={20}
                  color={THEME.COLORS.CAPTION_300}
                  style={styles.iconButtonCart}
                />
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentAddress}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#FFF",
            padding: 16,
            borderRadius: 8,
            width: "90%",
            flexDirection: "row",
          }}
        >
          <MaterialIcons
            name="add-location-alt"
            size={20}
            color="#FFF"
            style={{ marginRight: 8, textAlignVertical: "center" }}
          />
          <Text style={styles.title}>Adicionar nova localização</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
