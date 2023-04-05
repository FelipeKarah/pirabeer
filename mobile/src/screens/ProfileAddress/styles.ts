import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    paddingVertical: 32,
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
  label:{
    width:'35%',
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginVertical : 8
  },
  title:{
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textAlignVertical:'center',
    paddingHorizontal:15
  },
  contentAddress:{
    marginTop: 30
  },
  descriptionAddres:{
    width: '85%',
    flexDirection:'row',
    padding: 10,
  },
  iconButtonCart:{
    flex:1,
    alignSelf:'center',
    textAlignVertical:'center'
  },
  buttonRemoveProduct:{
    flex:1,
    borderLeftWidth:1,
    textAlignVertical:'center',
    alignSelf:'center',
    borderColor: '#FFF'
  },
});