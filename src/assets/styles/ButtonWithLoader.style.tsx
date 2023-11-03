import { StyleSheet } from 'react-native';
import { Color } from '../../constants/Color';
import { Typography } from '../../constants/Typography';

const ButtonDarkStyle = StyleSheet.create({
  buttonWrap: {
    width: '100%',
  },
  button: {
    backgroundColor: Color.Transparent,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    borderRadius: 30,
    width: '100%',
  },
  buttonText: {
    fontSize: Typography.FontSize.lg,
    fontFamily: Typography.Font.MulishBold,
    color: Color.White,
    marginStart: 10,
  },
  labelStyling: {
    fontSize: Typography.FontSize.lg,
    fontFamily: Typography.Font.MulishBold,
  },
  contentStyle: {
    alignItems: 'center',
    minHeight: 54,
  },
  linearGradient: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export default ButtonDarkStyle;
