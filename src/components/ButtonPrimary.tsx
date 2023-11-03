import * as React from 'react';
import { Button } from 'react-native-paper';
import { Color } from '../constants/Color';
import styles from '../assets/styles/ButtonPrimary.style';
import LinearGradient from 'react-native-linear-gradient';
import { ViewStyle, TextStyle } from 'react-native';

interface ButtonPrimaryProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle; // Use ViewStyle for style prop
  labelStyle?: TextStyle; // Use TextStyle for labelStyle prop
  contentStyle?: ViewStyle; // Use ViewStyle for contentStyle prop
  smallSize: boolean;
  PrimaryBack: boolean;
}

const ButtonPrimary = ({
  title,
  onPress,
  style,
  labelStyle,
  contentStyle,
  smallSize,
  PrimaryBack,
}: ButtonPrimaryProps) => {
  const linerProps = {};

  if (smallSize) {
    linerProps['start'] = { x: 0, y: 0 };
    linerProps['end'] = { x: 1, y: 0 };
  }

  return (
    <>
      <LinearGradient
        {...linerProps}
        colors={smallSize ? Color.ShareLinkButton : Color.PrimaryGradient}
        style={[
          styles.linearGradient,
          { borderRadius: smallSize ? 50 : 12, marginLeft: smallSize ? 'auto' : 0 },
        ]}
      >
        <Button
          mode="contained"
          buttonColor={PrimaryBack ? Color.Primary : Color.Transparent}
          contentStyle={[styles.contentStyle, contentStyle]}
          labelStyle={[styles.labelStyling, labelStyle]}
          style={[style]}
          onPress={onPress}
        >
          {title}
        </Button>
      </LinearGradient>
    </>
  );
};

export default ButtonPrimary;
