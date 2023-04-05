import { TouchableOpacity, ImageBackground, TouchableOpacityProps, Text, View} from 'react-native';
import { styles } from './styles';
import { Fontisto } from '@expo/vector-icons'
import { convertStringBRL } from '../../utils/currency';
import { Products } from '../../interfaces/Products';


interface Props  extends TouchableOpacityProps{
  data:Products
  sale?: boolean
}

export function CardCartProduct({ data, sale = true , ...rest }:Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        <ImageBackground 
          style={styles.cover}
          source={{uri: data.bannerUrl}}
        >
        </ImageBackground>
        <View style={styles.description}>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.features}> Marca : {data?.brand}</Text>
        </View>
        { data?.sale && <Fontisto name='shopping-sale' size={20} style={styles.iconSale}/> }
      </View>
    </TouchableOpacity>
  );
}