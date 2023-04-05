import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    paddingVertical: 32,
  },
  content: {
    marginTop:15,
    flex:1,
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
  button:{
    width:'40%',
    borderRadius: 20,
    padding:10,
    flexDirection:'row',
    justifyContent:'center',
    textAlignVertical:'center'
  },
  containerButtons:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:40,
  },
  label:{
    marginLeft:5,
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textAlignVertical:'center'
  },
});