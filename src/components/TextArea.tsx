import React from 'react';
import { TextInput } from 'react-native-paper';
import { Color } from '../constants/Color';
import { Typography } from '../constants/Typography';

// Define the type for the props passed to CutomTextInput
interface CutomTextAreaProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  white: boolean;
  icon: React.ReactNode | null;
  charLimit: number; //
}

const CustomTextArea: React.FC<CutomTextAreaProps> = ({
  placeholder,
  onChangeText,
  icon = null,
  charLimit = 1000,
  white,
  ...rest
}) => {
  return (
    <>
      <TextInput
        {...rest}
        editable
        multiline
        numberOfLines={10}
        returnKeyType="done"
        returnKeyLabel="Done"
        minHeight={80}
        maxLength={charLimit}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={true}
        mode="outlined"
        textColor={Color.Dark}
        left={icon === null ? undefined : <TextInput.Icon icon={() => icon} />}
        outlineStyle={{ borderRadius: 7.657, borderColor: white ? '#fff' : Color.InputBorder }}
        placeholderTextColor={white ? Color.Dark : Color.Gray}
        contentStyle={{
          fontFamily: Typography.Font.PrimaryMedium,
          fontSize: 15,
          color: Color.Gray,
        }}
        onChangeText={onChangeText}
        style={{
          textAlignVertical: 'top',
          borderRadius: 7.657,
          borderColor: white ? '#fff' : Color.InputBorder,
          paddingVertical: 10,
          marginTop: 7,
        }}
        theme={{
          colors: {
            primary: Color.Primary,
            background: white ? '#fff' : Color.lightBlue,
            placeholder: Color.Gray,
            text: Color.Dark,
            error: Color.Warning,
          },
        }}
      />
    </>
  );
};

export default CustomTextArea;
