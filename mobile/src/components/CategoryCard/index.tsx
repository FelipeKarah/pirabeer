import { TouchableOpacity, ImageBackground, TouchableOpacityProps, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface CategoryCardProps {
  id: string;
  title: string;
  bannerUrl: string
}
interface Props  extends TouchableOpacityProps{
  data:CategoryCardProps
  active?: boolean
}

export function CategoryCard({ data, active, ...rest }:Props) {
  return (
    <TouchableOpacity style={[styles.container, active ? {opacity:1} : {opacity:0.5} ]} {...rest}>
      <ImageBackground 
        style={styles.cover}
        source={{uri: data.bannerUrl}}
      >
        <LinearGradient 
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}