import { styles } from './styles';
import { THEME } from '../../theme';
import { ImageBackground } from 'react-native';
import backgroundImg from '../../../assets/avatar-default.png';
export function ButtonAvatar({ size, color}: any) {
  return (

    <ImageBackground 
      source={backgroundImg}
      style={styles.container}
      imageStyle={{ borderRadius: 30}}
      defaultSource={backgroundImg}
      >
    </ImageBackground>
  );
}
