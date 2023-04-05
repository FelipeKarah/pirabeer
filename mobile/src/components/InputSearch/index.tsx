import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { styles } from './styles';
import { THEME } from '../../theme';


const InputSearch = (props: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props?.placeholder}
        placeholderTextColor={THEME.COLORS.CAPTION_400} 
        {...props}
      />
      <TouchableOpacity  style={styles.iconSearch}>
        <Entypo name='magnifying-glass' color={THEME.COLORS.CAPTION_300} size={20} />
      </TouchableOpacity>
     
    </View>
  );
}



export default InputSearch;