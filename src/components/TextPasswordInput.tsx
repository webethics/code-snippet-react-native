import React = require('react');
import { TextInput } from 'react-native-paper';
import styles from '../assets/styles/TextInput.style';
import { Color } from '../constants/Color';
import { Typography } from '../constants/Typography';
import { useState } from 'react';

import EyeIcon from '../assets/icons/eye.svg';
import EyeClose from '../assets/icons/eye-close.svg';
import { Platform } from 'react-native';
// Define the type for the props pas to CutomTextInput
interface CutomTextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  icon: null; // You may need to adjust this type based on the actual type of the icon prop,
  showSecureText: boolean;
  Keyboardtype: string;
  maxlength: number;
  isWhite: boolean;
  isPasswordIcon: boolean;
}

const CutomTextPasswordInput: React.FC<CutomTextInputProps> = ({
  placeholder,
  onChangeText,
  icon,
  showSecureText = false,
  Keyboardtype,
  maxlength,
  isWhite = false,
  isPasswordIcon = false,
  ...rest
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(showSecureText);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <>
      <TextInput
        {...rest}
        autoCapitalize="none"
        textContentType="oneTimeCode"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        mode="outlined"
        textColor={Color.Dark}
        returnKeyType="done"
        returnKeyLabel="Done"
        outlineStyle={[
          styles.outlineStyle,
          { borderColor: isWhite ? Color.White : Color.InputBorder },
        ]}
        placeholder={placeholder}
        keyboardType={Keyboardtype}
        maxLength={maxlength}
        placeholderTextColor={Color.Gray}
        style={[styles.placeholder, { height: Platform.OS === 'ios' && 56 }]}
        onChangeText={onChangeText}
        left={icon === null ? '' : <TextInput.Icon icon={() => icon} />}
        right={
          isPasswordIcon ? (
            <TextInput.Icon
              onPress={togglePasswordVisibility}
              color={Color.Error}
              icon={() => (isPasswordVisible ? <EyeIcon /> : <EyeClose />)}
            />
          ) : (
            ''
          )
        }
        theme={{
          colors: {
            primary: Color.Primary,
            background: isWhite ? Color.White : Color.lightBlue,
            placeholder: Color.Gray,
            text: Color.Dark,
            error: Color.Warning,
          },
        }}
        contentStyle={[
          styles.ContentStyle,
          { fontFamily: isWhite ? Typography.Font.PrimaryLight : Typography.Font.PrimaryMedium },
        ]}
      />
    </>
  );
};

export default CutomTextPasswordInput;
