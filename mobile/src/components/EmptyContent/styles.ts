import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  description:{
    marginLeft: 8,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize:THEME.FONT_SIZE.MD,
    color:THEME.COLORS.CAPTION_300
  }
});