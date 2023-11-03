import React = require('react');
import { TextInput } from 'react-native-paper';
import styles from '../assets/styles/TextInput.style';
import { Color } from '../constants/Color';
import AlertIcon from '../assets/icons/info.svg';
import { Typography } from '../constants/Typography';
import { Platform } from 'react-native';

// Define the type for the props passed to CutomTextInput
interface DarkTextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  icon: React.ReactNode | null; // You may need to adjust this type based on the actual type of the icon prop,
  showSecureText: boolean;
  Keyboardtype: string;
  maxlength: number;
  iserror: boolean;
  multiline: boolean;
}

const DarkTextInput: React.FC<DarkTextInputProps> = ({
  placeholder,
  onChangeText,
  icon = null,
  showSecureText = false,
  Keyboardtype,
  maxlength,
  iserror = false,
  multiline = false,
  ...rest
}) => {
  return (
    <>
      <TextInput
        {...rest}
        multiline={multiline}
        spellCheck={true}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={showSecureText}
        mode="outlined"
        returnKeyType="done"
        returnKeyLabel="Done"
        textColor={Color.Dark}
        outlineStyle={[styles.outlineStyle, { borderColor: Color.PureDark }]}
        placeholder={placeholder}
        keyboardType={Keyboardtype}
        maxLength={maxlength}
        placeholderTextColor={Color.PureDark}
        style={[
          styles.placeholder,
          multiline
            ? { paddingVertical: Platform.OS === 'ios' ? 0 : 14 }
            : { height: Platform.OS === 'ios' ? 56 : undefined },
        ]}
        onChangeText={onChangeText}
        left={icon === null ? '' : <TextInput.Icon icon={() => icon} />}
        right={iserror ? <TextInput.Icon color={Color.Error} icon={() => <AlertIcon />} /> : ''}
        theme={{
          colors: {
            primary: Color.Primary,
            background: Color.White,
            placeholder: Color.Gray,
            text: Color.Gray,
            error: Color.Warning,
          },
        }}
        contentStyle={[
          styles.ContentStyle,
          {
            fontFamily: Typography.Font.PrimaryMedium,
            color: Color.PureDark,
          },
        ]}
      />
    </>
  );
};

export default DarkTextInput;
