import * as React from 'react';
import { Color } from '../constants/Color';
import styles from '../assets/styles/ButtonWithLoader.style';
import LinearGradient from 'react-native-linear-gradient';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonPrimaryProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  contentStyle?: ViewStyle;
  customStyle?: ViewStyle;
  isLoading?: boolean;
  isLoginProgress?: boolean;
  PrimaryBack?: boolean;
}

const ButtonWithLoader = ({
  title,
  onPress,
  customStyle,
  isLoading,
  isLoginProgress,
  PrimaryBack,
}: ButtonPrimaryProps) => {
  return (
    <LinearGradient
      colors={Color.PrimaryGradient}
      style={[
        styles.linearGradient,
        {
          opacity: isLoading ? 0.6 : 1,
          backgroundColor: PrimaryBack ? Color.Primary : Color.Transparent,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.buttonWrap}
        onPress={onPress}
        disabled={isLoading || isLoginProgress}
        activeOpacity={0.5}
      >
        <View style={{ ...styles.button, ...customStyle }}>
          {isLoading && <ActivityIndicator size="small" color="white" />}
          <Text style={{ ...styles.buttonText, ...customStyle }}>{title}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ButtonWithLoader;
