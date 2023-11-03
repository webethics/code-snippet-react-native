import { StyleSheet } from 'react-native';
import { Typography } from '../../constants/Typography';

const TextInputStyle = StyleSheet.create({
  outlineStyle: {
    borderRadius: 7.657,
  },
  placeholder: {
    fontFamily: Typography.Font.PrimaryRegular,
    fontSize: Typography.FontSize.md,
  },
  ContentStyle: {
    fontFamily: Typography.Font.PrimaryRegular,
    fontSize: Typography.FontSize.md,
  },
});

export default TextInputStyle;
