import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Background } from "../../components/Background";
import logoImg from "../../assets/logo.png";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { useAuth } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api/api";
import Input from "../../components/Input";
import { Users } from "../../interfaces/Users";
import { Loading } from "../../components/Loading";

export function ProfileRegistration() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [userConnected, setUserConnected] = useState<Users>({} as Users);
  const [loading, setLoading] = useState<boolean>(false);

  function handleGoBack() {
    navigation.goBack();
  }

  async function saveRegistration(){
    try{
      setLoading(true);
      await api.post(`/${user?.id}/registration`, { 
        params : userConnected
      })
      setLoading(false);
      alert('Cadastro Atualizado com Sucesso!')
      navigation.goBack();
    } catch(err) {
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    api
      .get(`/${user?.id}/registration`)
      .then((response) => setUserConnected(response.data))
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
          <Text style={styles.headerTitle}>Dados Cadastrais</Text>
          <View style={styles.right} />
        </View>
        { ! userConnected.cpf ? <Loading/> :
        <ScrollView style={styles.content}>
          <Input
            label="Nome *"
            placeholder="Nome"
            IconName="menu"
            autoCapitalize="none"
            onChangeText={(event: any) =>
              setUserConnected((users) => ({ ...users, firstName: event }))
            }
            value={userConnected.firstName}
            autoCorrect={false}
            keyboardType="text"
            editable={true}
            selectTextOnFocus={true}
          />
          <Input
            label="Sobrenome *"
            placeholder="Sobrenome"
            IconName="menu"
            onChangeText={(event: any) =>
              setUserConnected((users) => ({ ...users, lastName: event }))
            }
            autoCapitalize="none"
            value={userConnected.lastName}
            autoCorrect={false}
            keyboardType="text"
            editable={true}
            selectTextOnFocus={true}
          />
          <Input
            label="CPF *"
            placeholder="000.000.000-00"
            IconName="v-card"
            autoCapitalize="none"
            onChangeText={(event: any) =>
              setUserConnected((users) => ({ ...users, cpf: event }))
            }
            value={userConnected.cpf}
            autoCorrect={false}
            keyboardType="numeric"
            editable={true}
            selectTextOnFocus={true}
          />
          <Input
            label="Email *"
            placeholder="pirabeer@pirabeer.com"
            IconName="mail"
            autoCapitalize="none"
            onChangeText={(event: any) =>
              setUserConnected((users) => ({ ...users, email: event }))
            }
            value={userConnected.email}
            autoCorrect={false}
            keyboardType="email-address"
            editable={true}
            selectTextOnFocus={true}
          />
          <Input
            label="Celular *"
            placeholder="(19) 99999-9999"
            IconName="calculator"
            autoCapitalize="none"
            onChangeText={(event: any) =>
              setUserConnected((users) => ({ ...users, cell: event }))
            }
            value={userConnected.cell}
            autoCorrect={false}
            keyboardType="numeric"
            editable={true}
            selectTextOnFocus={true}
          />
          <Input
            label="Telefone"
            placeholder="(19) 9999-9999"
            IconName="phone"
            autoCapitalize="none"
            onChangeText={(event: any) =>
              setUserConnected((users) => ({ ...users, telephone: event }))
            }
            value={userConnected.telephone}
            autoCorrect={false}
            keyboardType="numeric"
            editable={true}
            selectTextOnFocus={true}
          />

          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: THEME.COLORS.OVERLAY }]}
            >
              <Entypo name="key" color={THEME.COLORS.TEXT} size={18} />
              <Text style={styles.label}>Alterar Senha</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveRegistration()}
              style={[styles.button, { backgroundColor: THEME.COLORS.PRIMARY }]}
            >
              { loading ? <Loading color="SHAPE"/> :
                <Entypo name="save" color={THEME.COLORS.TEXT} size={18} />
              }
              <Text style={styles.label}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        }
      </SafeAreaView>
    </Background>
  );
}
