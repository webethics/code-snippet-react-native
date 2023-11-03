import React = require('react');
import { TextInput } from 'react-native-paper';
import styles from '../assets/styles/TextInput.style';
import { Color } from '../constants/Color';
import { Typography } from '../constants/Typography';
import AlertIcon from '../assets/icons/info.svg';
import { Platform } from 'react-native';
// Define the type for the props passed to CutomTextInput
interface CutomTextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  icon: React.ReactNode | null; // You may need to adjust this type based on the actual type of the icon prop,
  showSecureText: boolean;
  Keyboardtype: string;
  maxlength: number;
  iserror: boolean;
  isWhite: boolean;
}

const CutomTextInput: React.FC<CutomTextInputProps> = ({
  placeholder,
  onChangeText,
  icon = null,
  showSecureText = false,
  Keyboardtype,
  maxlength,
  iserror = false,
  isWhite = false,
  ...rest
}) => {
  return (
    <>
      <TextInput
        {...rest}
        autoCapitalize="none"
        spellCheck={true}
        autoCorrect={false}
        secureTextEntry={showSecureText}
        mode="outlined"
        textColor={Color.Dark}
        outlineStyle={[
          styles.outlineStyle,
          { borderColor: isWhite ? Color.White : Color.InputBorder },
        ]}
        placeholder={placeholder}
        numberOfLines={1}
        keyboardType={Keyboardtype}
        maxLength={maxlength}
        placeholderTextColor={Color.Gray}
        style={[styles.placeholder, { height: Platform.OS === 'ios' && 56 }]}
        returnKeyType="done"
        returnKeyLabel="Done"
        onChangeText={onChangeText}
        left={icon === null ? '' : <TextInput.Icon icon={() => icon} />}
        right={iserror ? <TextInput.Icon color={Color.Error} icon={() => <AlertIcon />} /> : ''}
        theme={{
          colors: {
            primary: Color.Primary,
            background: isWhite ? Color.White : Color.lightBlue,
            placeholder: Color.Gray,
            text: Color.Gray,
            error: Color.Warning,
          },
        }}
        contentStyle={[
          styles.ContentStyle,
          {
            fontFamily: isWhite ? Typography.Font.PrimaryLight : Typography.Font.PrimaryMedium,
            color: Color.Gray,
          },
        ]}
      />
    </>
  );
};

export default CutomTextInput;
