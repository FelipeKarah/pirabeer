import { THEME } from '../../theme/index';
import { Inter_200ExtraLight } from '@expo-google-fonts/inter';
import { StyleSheet, ColorValue } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  cover: {
    width: 200,
    height: 200,
    marginTop:15
  },
  containerList:{
    width: '90%',
    backgroundColor:  THEME.COLORS.SHAPE,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom:5

  },
  value:{
    alignSelf: 'flex-end',
    fontSize: THEME.FONT_SIZE.PP,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  label:{
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textAlignVertical:'center'
  },
  currency:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textSale:{
    textDecorationLine:'line-through',
    color : THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  valueTotal:{
    color : THEME.COLORS.SUCCESS,
    alignSelf: 'flex-end',
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  buttonCartDecrement:{
    width:45,
    height:35,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1,
    borderColor:THEME.COLORS.CAPTION_500,
  },
  buttonCartIncrement:{
    width:45,
    height:35,
    backgroundColor:THEME.COLORS.PRIMARY,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor:THEME.COLORS.CAPTION_500,
  },
  iconButtonCart:{
    flex:1,
    alignSelf:'center',
    textAlignVertical:'center'
  },
  contentButton:{
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    paddingHorizontal:32,
    justifyContent:'center',
  },
  input:{
    height: 35,
    width:85,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor:THEME.COLORS.CAPTION_500,
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign:'center'
  },
  total:{
    width: '100%',
    flexDirection:'row',
    marginTop:10,
    justifyContent:'space-between',
  },
  buttonShoppingCart:{
    height: 55,
    width:'45%',
    borderRadius: 20,
    margin: 5,
    flexDirection:'row',
    justifyContent:'center',
    padding:8,
    textAlignVertical:'center'
  },
  containerButtons:{
    width: '90%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:40,
  },
  containerSale:{
    width: '90%',
    backgroundColor:  THEME.COLORS.PRIMARY,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'flex-end',
    marginBottom:5,
  },
  iconSale:{
    position:'absolute',
    top:13,
    left:10,
  }
});