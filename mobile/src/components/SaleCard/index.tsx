import { TouchableOpacity, ImageBackground, TouchableOpacityProps, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { Fontisto } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { convertStringBRL } from '../../utils/currency';
import { Products } from '../../interfaces/Products';

export interface SaleCardProps {
  id: string;
  title: string;
  subtitle:string;
  bannerUrl: string
}
interface Props  extends TouchableOpacityProps{
  data:Products
  sale?: boolean
}

export function SaleCard({ data, sale = true , ...rest }:Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground 
        style={sale ? styles.coverSale : styles.cover}
        source={{uri: data.bannerUrl}}
      >
        <LinearGradient 
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>

          <Text style={styles.value}>
            R$ {convertStringBRL((data.value))}
          </Text>

        </LinearGradient>
        <Fontisto name='shopping-sale' size={60} style={styles.iconSale}/>
      </ImageBackground>
    </TouchableOpacity>
  );
}