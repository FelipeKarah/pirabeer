import { View, ActivityIndicator, ViewProps } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface Props{
  color?: 'SHAPE' | 'PRIMARY'
}

export function Loading({color}: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color == 'SHAPE' ? THEME.COLORS.SHAPE : THEME.COLORS.PRIMARY }/>
    </View>
  );
}