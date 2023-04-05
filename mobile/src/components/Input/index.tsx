import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { styles } from './styles';
import { THEME } from '../../theme';


const Input = (props: any) => {
  const [secureText, setSecureText] = useState<boolean>(props.secureTextEntry)
  return (
    <View style={styles.container}>
      {props?.label && <Text style={styles.label}>{props?.label}</Text> }
      <TextInput
        style={[styles.input, props?.IconName ? {paddingLeft:40} : {paddingLeft:10}]}
        placeholder={props?.placeholder}
        placeholderTextColor={THEME.COLORS.CAPTION_400} 
        {...props}
        secureTextEntry={secureText}
      />
      {props?.IconName && <Entypo name={props?.IconName} color={THEME.COLORS.CAPTION_300} size={20} style={styles.icon}/>}
      {props.secureTextEntry && (
        <TouchableOpacity  style={styles.iconSecret} onPress={() =>setSecureText(!secureText)}>
          <Entypo name={secureText ? 'eye' : 'eye-with-line' } color={THEME.COLORS.CAPTION_300} size={20} />
        </TouchableOpacity>
      )}

     
    
    </View>
  );
}



export default Input;