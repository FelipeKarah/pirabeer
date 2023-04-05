import { ImageBackground } from 'react-native';

import { styles } from './styles';

import backgroundImg from '../../assets/backgroundClean.png';

interface Props {
  children: React.ReactNode;
  border?: number;
}

export function Background({ children, border }: Props) {
  return (
    <ImageBackground 
      source={backgroundImg}
      style={styles.container}
      defaultSource={backgroundImg}
      borderBottomLeftRadius={border ? 50 : 0 }
      borderBottomRightRadius={border ? 50 : 0 }
    >
      { children }
    </ImageBackground>
  );
}