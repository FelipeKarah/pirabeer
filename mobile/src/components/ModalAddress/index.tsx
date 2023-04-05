import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { useEffect } from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import * as ClipBoard from "expo-clipboard";
import { useState } from "react";
import api from "../../services/api/api";
import { useAuth } from "../../contexts/auth";
import { Address } from "../../interfaces/Address";
import { ModalAddAddress } from "../ModalAddAddress";
import { Loading } from "../Loading";
interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
  selectAddress: (item: Address) => void;
}

export function ModalAddress({
  discord,
  onClose,
  selectAddress,
  ...rest
}: Props) {
  const [address, setAddress] = useState<Address[]>([]);
  const [inModalAddAddress, setInModalAddAddress] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      setLoading(true);
      await api
        .get(`/${user?.id}/address`, { params: { status: "Ativo" } })
        .then((response) => setAddress(response.data))
        .catch((error) => console.log(error));
    })();

    setLoading(false);
  }, [inModalAddAddress == false]);

  function addAddress() {
    setInModalAddAddress(true);
  }

  return (
    <>
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
              <Text style={styles.title}>Selecione o endereço de entrega</Text>
              <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={THEME.COLORS.CAPTION_500}
                />
              </TouchableOpacity>
            </View>

            {loading ? (
              <Loading />
            ) : (
              <FlatList
                data={address}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => selectAddress(item)}>
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
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
              />
            )}

            <TouchableOpacity onPress={() => addAddress()}>
              <View style={{ flexDirection: "row", marginTop: 30 }}>
                <Entypo
                  name="plus"
                  size={20}
                  color={THEME.COLORS.PRIMARY}
                  style={{ textAlignVertical: "center" }}
                />
                <View>
                  <Text
                    style={[
                      styles.title,
                      { paddingVertical: 10, color: THEME.COLORS.PRIMARY },
                    ]}
                  >
                    Adicionar Novo Endereço
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ModalAddAddress
        visible={inModalAddAddress}
        onClose={() => setInModalAddAddress(false)}
      />
    </>
  );
}
