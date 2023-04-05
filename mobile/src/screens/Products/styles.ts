import { Inter_500Medium } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  header:{
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    marginTop:28,
    paddingHorizontal:32,
    justifyContent:'space-between',
  },
  logo: {
    width: 72,
    height: 40
  },
  right:{
    width: 20,
    height: 20
  },
  headerTitle:{
    color:'#FFF',
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize:THEME.FONT_SIZE.MD,
  },
  title:{
    color : THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
  contentList: {
    paddingLeft:16,
    paddingRight:32,
  },
});