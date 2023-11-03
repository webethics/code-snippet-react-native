import { StyleSheet } from 'react-native';
import { Color } from '../../constants/Color';

const WelcomeStyle = StyleSheet.create({
  headerBox: {
    paddingHorizontal: 20,
    paddingBottom: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.PureDark,
  },

  logo: {
    width: 262,
    height: 135.78,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    width: '100%',
  },
});

export default WelcomeStyle;
