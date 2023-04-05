import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';

export function ButtonShoppingCart({focused, size, color}: any) {
  return (
    <View style={[styles.container, { backgroundColor: focused ? THEME.COLORS.PRIMARY : THEME.COLORS.SHAPE}]}>
      <Feather name="shopping-cart" size={size} color={color}/>
    </View>
  );
}
