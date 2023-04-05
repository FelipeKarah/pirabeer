import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { useState } from "react";
import api from "../../services/api/api";
import { useAuth } from "../../contexts/auth";
import InputSearch from "../InputSearch";
import * as Location from "expo-location";
import Input from "../Input";
import { Loading } from "../Loading";
import { Address } from "../../interfaces/Address";
interface Props extends ModalProps {
  onClose: () => void;
}

export function ModalAddAddress({ onClose, ...rest }: Props) {
  const [location, setLocation] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingSave, setLoadingSave] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const { user } = useAuth();

  async function saveAddress(){

    try{
      setLoadingSave(true);
      await api.post(`/${user?.id}/address`, { 

        params :{
          userId : user?.id,
          cep : location.postalCode,
          road : location.street,
          place : location.street,
          number : location.streetNumber,
          district : location.district,
          city : location.city ?? location.subregion,
          state : location.region,
          country : location.country,
          latitude : JSON.stringify(location.latitude),
          longitude : JSON.stringify(location.longitude),
          status : 'Ativo',
          inDelivery : false
        }
      })
      setLoadingSave(false);
      onClose();
    } catch(err) {
      setLoadingSave(false);
      console.log(err);
    }
  }


  async function currentLocation() {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let _location: any = await Location.getCurrentPositionAsync({});

    let keys = {
      latitude: _location.coords.latitude,
      longitude: _location.coords.longitude,
    };
    let infoLocation: any = await Location.reverseGeocodeAsync(keys);

    let locationCurrent = { ...infoLocation[0], ...keys };

    setLocation(locationCurrent);
    setLoading(false);
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title}>Cadastro localização</Text>
            <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
              <MaterialIcons
                name="close"
                size={20}
                color={THEME.COLORS.CAPTION_500}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.contentButton}
            onPress={() => currentLocation()}
          >
            {loading ? <Loading /> : (
              <>
              <MaterialIcons name="my-location" size={20} color="#FFF" />
              <Text style={styles.tittleButton}>Usar Localização Atual</Text>
              </>)
            }
            
          </TouchableOpacity>
          <InputSearch
            placeholder="Informe o CEP"
            // value={search}
            // onChangeText={setSearch}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            editable={false}
            selectTextOnFocus={false}
          />
         { (location.postalCode && !loading) && <ScrollView style={{width:'90%'}}>

          <Input
            label="CEP"
            placeholder="CEP"
            IconName="lock"
            autoCapitalize="none"
            value={location?.postalCode}
            autoCorrect={false}
            keyboardType="numeric"
            editable={false}
            selectTextOnFocus={false}
          />
          <Input
            label="Logradouro"
            placeholder="Logradouro (ex: Rua Albertina )"
            IconName="lock"
            autoCapitalize="none"
            value={location?.street}
            autoCorrect={false}
            editable={false}
            selectTextOnFocus={false}
          />
          <Input
            label="Numero"
            placeholder="Numero"
            IconName=""
            autoCapitalize="none"
            onChangeText={(event: any) => setLocation((location: Address) => ({...location, streetNumber: event}))}
            value={location?.streetNumber}
            autoCorrect={false}
            keyboardType="numeric"
          />
          <Input
            label="Bairro"
            placeholder="Bairro"
            value={location?.district}
            IconName="lock"
            // onChangeText={location?.subregion}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            editable={false}
            selectTextOnFocus={false}
          />
          <Input
            label="Estado"
            placeholder="Estado"
            value={location?.region}
            IconName="lock"
            // onChangeText={location?.subregion}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            editable={false}
            selectTextOnFocus={false}
          />
          <Input
            label="Pais"
            placeholder="Pais"
            value={location?.country}
            IconName="lock"
            // onChangeText={location?.subregion}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            editable={false}
            selectTextOnFocus={false}
          />
          </ScrollView>}
          <View style={{flexDirection:'row', justifyContent:'space-between', padding: 10}}>
          <TouchableOpacity
            style={[styles.contentButtonSave, {backgroundColor:THEME.COLORS.OVERLAY}]}
            onPress={onClose}
            activeOpacity={5}
          >
            <MaterialIcons name="block" size={20} color="#FFF" />
            <Text style={styles.tittleButton}>Cancelar</Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.contentButtonSave,{backgroundColor: (!location.postalCode || loadingSave) ? THEME.COLORS.CAPTION_400 : THEME.COLORS.PRIMARY}]}
            onPress={() => saveAddress()}
            activeOpacity={5}
            disabled={!location.postalCode || loadingSave}
          >
            <MaterialIcons name="save" size={20} color="#FFF" />
            <Text style={styles.tittleButton}>{loadingSave ?'Salvando': 'Salvar'}</Text>
          </TouchableOpacity>
          </View>
        </View>

      </View>
    </Modal>
  );
}
