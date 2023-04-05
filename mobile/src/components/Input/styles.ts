import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    minWidth:'90%',
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'transparent',
    borderColor:THEME.COLORS.CAPTION_300,
    borderRadius: 8,
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  label:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  icon: {
    position: 'absolute',
    left:8,
    top:34,
  },
  iconSecret:{
    position: 'absolute',
    right:8,
    top:34,
    zIndex:20000
  }
});