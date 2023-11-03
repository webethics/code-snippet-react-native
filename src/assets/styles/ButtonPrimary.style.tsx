import { StyleSheet } from 'react-native';
import { Typography } from '../../constants/Typography';

const ButtonPrimaryStyle = StyleSheet.create({
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

export default ButtonPrimaryStyle;
