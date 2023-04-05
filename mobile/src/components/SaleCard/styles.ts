import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    borderWidth: 1,
    borderColor:THEME.COLORS.CAPTION_400,
    borderRadius:20
  },
  cover: {
    width: 130,
    height: 140,
    justifyContent: 'flex-end',
    borderRadius:8,
    overflow: 'hidden'
  },
  coverSale: {
    width: 240,
    height: 320,
    justifyContent: 'flex-end',
    borderRadius:8,
    overflow: 'hidden'
  },
  footer : {
    width:'100%',
    height: 102,
    padding: 16,
    justifyContent:'flex-end',
    borderRadius:20
  },
  name: {
    color:THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  value : {
    color:THEME.COLORS.PRIMARY,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  iconSale:{
    position:'absolute',
    top:10,
    right:10,
    zIndex:2000,
    color: THEME.COLORS.PRIMARY
  }
});