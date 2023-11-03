import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';

const ThreeLongDotsStyle = StyleSheet.create({
  illusion: {
    backgroundColor: Color.White,
    paddingHorizontal: 20,
    paddingTop: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navStep: {
    width: 26,
    height: 6,
    borderRadius: 100,
    backgroundColor: Color.InputBorder,
    marginHorizontal: 3,
  },
  active: {
    width: 26,
    height: 6,
    borderRadius: 100,
    marginHorizontal: 3,
  },
});

export default ThreeLongDotsStyle;
