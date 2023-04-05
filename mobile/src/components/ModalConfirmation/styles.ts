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
    padding:5,
    maxHeight: 400,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius:8,
    alignItems: 'center',
    justifyContent: 'center'
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
  button:{
    width: 100,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom:32,
    marginHorizontal: 15
  },
  text: {
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  },
});