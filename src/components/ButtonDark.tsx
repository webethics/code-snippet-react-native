import * as React from 'react';
import { Button } from 'react-native-paper';
import { Color } from '../constants/Color';
import styles from '../assets/styles/ButtonDark.style';
import { ViewStyle, TextStyle } from 'react-native';

interface ButtonDarkProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle; // Use ViewStyle for style prop
  labelStyle?: TextStyle; // Use TextStyle for labelStyle prop
  contentStyle?: ViewStyle; // Use ViewStyle for contentStyle prop
}

const ButtonDark = ({ title, onPress, style, labelStyle, contentStyle }: ButtonDarkProps) => {
  return (
    <Button
      mode="contained"
      buttonColor={Color.ButtonDark}
      contentStyle={[styles.contentStyle, contentStyle]}
      labelStyle={[styles.labelStyling, labelStyle]}
      style={[style]}
      onPress={onPress}
    >
      {title}
    </Button>
  );
};

export default ButtonDark;
