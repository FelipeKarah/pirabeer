import { THEME } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    margin:40,
    flexDirection:'column',
  },
  logo: {
    alignSelf:'center',
    width: 214,
    height: 120,
    marginTop:74,
    marginBottom: 28
  },
  SignInButton:{
    height: 38,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom:32
  },
  signIn: {
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});