import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:THEME.COLORS.OVERLAY
  },
  content:{
    width: '90%',
    maxHeight:500,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius:8,
    alignItems: 'center',
  },
  closeIcon:{
    alignSelf: 'flex-end',
    margin: 16
  },
  label:{
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
  
  contentButton:{
    width:'90%',
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: 'center',
    flexDirection:'row',
    alignItems: 'center',
    borderRadius:8,
    padding: 5
  },
  contentButtonSave:{
    width:'40%',
    flexDirection:'row',
    borderRadius:8,
    padding: 8,
    margin: 5
  },
  tittleButton: {
    marginLeft: 10,
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  }
});