import { Inter_100Thin } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    padding: 32,
  },
  avatar: {
    width: 190,
    height: 190,
  },
  name:{
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    marginBottom: 30
  },
  buttonEditAvatar:{
    width: 60,
    height: 60,
  },
  backgroundEdit:{
    position: 'absolute',
    left: 60,
    bottom: 50,
    width: 60,
    height: 60,
    backgroundColor: THEME.COLORS.CAPTION_400,
    opacity: 0.9,
    borderRadius: 60
  },
  iconEdit:{
    flex:1,
    alignSelf:'center',
    textAlignVertical: 'center',
  },
  listenerOptions:{
    minWidth: '100%',
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    padding: 7,   
    marginVertical: 10
  },
  SignOutButton:{
    width: '100%',
    height: 38,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    alignItems: 'center',
    borderRadius: 4,
    marginTop:32,
    flexDirection:'row',
    paddingHorizontal:20,
    justifyContent: 'center',
  },
  signOut: {
    color : THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
});