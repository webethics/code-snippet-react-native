import { StyleSheet } from 'react-native';
import { Typography } from '../../constants/Typography';
import { Color } from '../../constants/Color';

const GlobalStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Color.White,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#1C1B1C',
    fontFamily: Typography.Font.PrimaryRegular,
    marginBottom: 15,
  },
  h3: {
    fontFamily: Typography.Font.PrimarySemiBold,
    fontSize: 26,
    color: '#1C1B1C',
  },
  h4: {
    fontFamily: Typography.Font.PrimarySemiBold,
    fontSize: 22,
    color: '#1C1B1C',
  },
  h6: {
    fontFamily: Typography.Font.PrimaryMedium,
    fontSize: 16,
    color: '#1C1B1C',
  },
});

export default GlobalStyle;
