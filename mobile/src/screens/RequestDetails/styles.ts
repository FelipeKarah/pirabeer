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
  description:{
    marginLeft:5,
    color:'#FFF',
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize:THEME.FONT_SIZE.SM,
  },
  descriptionObservation:{
    margin:5,
    color:'#FFF',
    fontFamily:THEME.FONT_FAMILY.REGULAR,
    fontSize:THEME.FONT_SIZE.PP,
  },
  contentAddress:{
    padding:20,
    flexDirection:'row'
  },
  contentDetails:{
    padding:20,
  },
  descriptionTotal:{
    width:'100%',
    color:THEME.COLORS.PRIMARY,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textAlign:'right',
    paddingHorizontal:20,
    borderTopWidth:1,
    paddingVertical:5,
    borderColor:THEME.COLORS.CAPTION_400
  },
  contentValue:{
    marginTop:20,
    paddingHorizontal:20,
    paddingVertical:5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  containerStatus:{
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'center'
  },
  cover: {
    width: 50,
    height: 65,
    borderRadius:8,
    overflow: 'hidden'
  },
  contentProducts:{
    padding:5,
  },
  contentCardProduct:{
    flexDirection:'row',
    borderBottomWidth:1,
    padding: 8,
  },
  descriptionCard:{
    flex:1,
    justifyContent:'center'
  },
  value:{
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    textAlign:'center',
    alignItems:'flex-end',
    alignContent:'flex-end',
    color:THEME.COLORS.PRIMARY,
    fontSize: THEME.FONT_SIZE.PP,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 4
  },
  backgroundStatus:{
    width:30,
    height:30,
    backgroundColor: THEME.COLORS.CAPTION_400,
    opacity: 0.9,
    borderRadius: 60
  },
  lineStatus:{
    width:70,
    height:2,
    backgroundColor: THEME.COLORS.CAPTION_400,
    justifyContent:'center',
    textAlignVertical:'center',
    margin:15
  },
  descriptionStatus:{
    position:'absolute',
    width:100,
    top:30,
    left:-15,
    color:THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.PP,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  iconStatus:{
    textAlign:'center',
    height:30,
    textAlignVertical:'center'
  }
});