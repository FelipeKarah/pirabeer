import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { THEME } from '../../theme';
import { Entypo } from '@expo/vector-icons'

import { styles } from './styles';

interface Props extends ViewProps {
  title?: string;
}

export function EmptyContent({title, ...rest}: Props) {
  return (
    <View style={styles.container}>
        <Entypo  size={50} name="dropbox" color={THEME.COLORS.CAPTION_300}/>
        <Text style={styles.description}>{title ?? 'Nenhuma informação encontrada!'}</Text>
    </View>
  );
}