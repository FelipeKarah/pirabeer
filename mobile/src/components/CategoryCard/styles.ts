import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 5,
  },
  cover: {
    width: 130,
    height: 140,
    justifyContent: 'flex-end',
    borderRadius:8,
    overflow: 'hidden'
  },
  footer : {
    width:'100%',
    height: 102,
    padding: 16,
    justifyContent:'flex-end',
  },
  name: {
    color:THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  }
});