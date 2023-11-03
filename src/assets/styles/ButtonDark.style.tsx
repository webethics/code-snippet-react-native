import { StyleSheet } from 'react-native';
import { Typography } from '../../constants/Typography';

const ButtonPrimaryStyle = StyleSheet.create({
  labelStyling: {
    fontSize: Typography.FontSize.sm,
    fontFamily: Typography.Font.PrimarySemiBold,
  },
  contentStyle: {
    alignItems: 'center',
    minHeight: 38,
  },
  linearGradient: {
    borderRadius: 100,
    overflow: 'hidden',
  },
});

export default ButtonPrimaryStyle;
