import { View, Modal, ModalProps, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { Loading } from "../Loading";

interface Props extends ModalProps {
  onClose: () => void;
  onConfirmed: () => void;
  title?: string;
  subtitle?: string;
  iconName?: any;
  colorIcon?: "SUCCESS" | "ALERT"
  loading?:boolean
}

export function ModalConfirmation(
  { 
    onClose,
    onConfirmed,
    title = 'Excluir Item',
    subtitle = 'Tem certeza que deseja excluir o item selecionado ?',
    iconName = "delete",
    colorIcon = "ALERT",
    loading = false,
    ...rest 
  }: Props) {

  function handleConfirmed(){
    onConfirmed();
  }


  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
              <MaterialIcons
                name="close"
                size={20}
                color={THEME.COLORS.CAPTION_500}
              />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <MaterialIcons
              name={iconName}
              size={60}
              color={colorIcon == "SUCCESS" ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
              weight="bold"
            />

            <Heading
              title={title}
              subtitle={subtitle}
              style={{ alignItems: "center", marginVertical: 24 }}
            />
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={[styles.button, {backgroundColor:THEME.COLORS.ALERT}]} onPress={onClose}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, {backgroundColor:THEME.COLORS.SUCCESS}]} disabled={loading} onPress={handleConfirmed}>
                {loading ? <Loading color="SHAPE"/> : <Text style={styles.text}>OK</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
