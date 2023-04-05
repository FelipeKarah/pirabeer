import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'flex-start',
    paddingHorizontal: 15,
    borderColor: THEME.COLORS.CAPTION_400,
  },
  content:{
    width: '80%',
    flexDirection:'row',
    borderBottomWidth:1,
    padding: 8,
  },
  cover: {
    width: 60,
    height: 80,
    justifyContent: 'flex-end',
    borderRadius:8,
    overflow: 'hidden'
  },
  description:{
    paddingHorizontal: 20,
    width: '100%',
  },
  title:{
    padding: 0,
    margin: 4,
    color:THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
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
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    textAlign:'center',
    alignItems:'flex-end',
    alignContent:'flex-end',
    color:THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 4
  },
  iconSale:{
    position:'absolute',
    top:10,
    left:0,
    color:THEME.COLORS.PRIMARY
  }
});