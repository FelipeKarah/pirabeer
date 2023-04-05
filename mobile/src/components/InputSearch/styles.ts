import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding:20
  },
  iconSearch:{
    position: 'absolute',
    right:30,
    top:30,
    zIndex:20000
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'transparent',
    borderColor:THEME.COLORS.CAPTION_300,
    borderRadius: 30,
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});