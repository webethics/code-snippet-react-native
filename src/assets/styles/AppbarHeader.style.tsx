import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';
import { Typography } from '../constants/Typography';

const AppbarStyle = StyleSheet.create({
  Appbar: {
    backgroundColor: Color.White,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    zIndex: 99,
  },
});

export default AppbarStyle;
