import { THEME } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header:{
    alignItems:'center',
    marginTop:58,
  },
  logo: {
    width: 72,
    height: 40
  },
  contentList: {
    paddingLeft:16,
    paddingRight:32,
  },
  cover: {
    width: 70,
    height: 90,
  },
  description:{
    width: '50%',
  },
  title:{
    padding: 0,
    margin: 4,
    color:THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  features:{
    padding: 0,
    margin: 0,
    color:THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.PP,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  value:{
    color:THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.PP,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 4
  },
  iconSale:{
    position:'absolute',
    top:10,
    left:0,
    color:THEME.COLORS.PRIMARY
  },
  content:{
    width: '100%',
    flexDirection:'row',
    borderBottomWidth:1,
    padding: 8,
  },
  input:{
    height:30,
    width:45,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor:THEME.COLORS.CAPTION_500,
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textAlign:'center'
  },
  buttonCartDecrement:{
    width:45,
    height:30,
    borderTopLeftRadius:10,
    borderWidth: 1,
    borderColor:THEME.COLORS.CAPTION_500,
  },
  buttonCartIncrement:{
    width:45,
    height:30,
    borderBottomLeftRadius:10,
    backgroundColor:THEME.COLORS.PRIMARY,
    borderWidth: 1,
    borderColor:THEME.COLORS.CAPTION_500,
  },
  iconButtonCart:{
    flex:1,
    alignSelf:'center',
    textAlignVertical:'center'
  },
  buttonRemoveProduct:{
    width:45,
    height:90,
    borderWidth: 1,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    borderColor:THEME.COLORS.CAPTION_500,
  },
  contentRadius:{
    width: '100%',
    flexDirection:'row',
    padding: 20,
    justifyContent:'space-between'
  },
  buttonRadio:{
    borderWidth:1,
    width:20,
    height:22,
    borderColor: '#FFF',
    borderRadius:3,
    marginHorizontal:5
  },
  contentAddress:{
    marginHorizontal: 20,
    borderWidth:1,
    borderColor: '#FFF',
    borderRadius:8,
    padding: 8,
  },
  descriptionAddres:{
    width: '90%',
    flexDirection:'row',
    padding: 8,
    textAlignVertical:'center'
  },
  featuresAddress:{
    paddingHorizontal: 5,
    marginHorizontal:10,
    color:THEME.COLORS.PRIMARY,
    fontSize: THEME.FONT_SIZE.PP,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    alignSelf:'flex-end',
    borderBottomWidth:1,
    borderBottomColor:THEME.COLORS.PRIMARY
  },
  containerButtons:{
    width: '100%',
    flexDirection:'row',
    justifyContent:'center',
    alignSelf:'center',
    marginVertical:30,
  },
  buttonShoppingCart:{
    flex:1,
    height: 60,
    justifyContent:'center',
    alignItems:'center',
    padding:8,
  },
});