import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1
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
  contentCard:{
    flexDirection: "row",
    borderBottomColor:THEME.COLORS.CAPTION_400,
    borderBottomWidth:1,
    padding:8,
  },
  contentCircle:{
    backgroundColor:THEME.COLORS.PRIMARY,
    width:70,
    height:70,
    borderRadius: 50,
    margin:10,
  },
  descriptionDay:{
    color:'#FFF',
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize:THEME.FONT_SIZE.LG,
    justifyContent:'center',
    alignSelf:'center',
    textAlignVertical:'center',
  },
  descriptionMonth:{
    color:THEME.COLORS.OVERLAY,
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize:THEME.FONT_SIZE.SM,
    textTransform:'uppercase'
  },
  description:{
    color:'#FFF',
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize:THEME.FONT_SIZE.PP,
  },
  contentDescription:{
    flex:1,
    padding:5,
    justifyContent:'center',
    textAlignVertical:'center',
  },
  descriptionStatus:{
    alignSelf: 'flex-end',
    fontSize: THEME.FONT_SIZE.PP,
    color:THEME.COLORS.PRIMARY,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textTransform: 'uppercase'
  }
});