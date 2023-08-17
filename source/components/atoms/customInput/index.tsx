import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, TextStyle, ViewStyle} from 'react-native';
import {TextInputProps} from 'react-native';

interface OwnProps {
  label?: string;
  containerStyle?: ViewStyle;
  placeholder?: string;
  style?: TextStyle;
  selectionColor?: TextStyle;
  placeholderTextColor?: TextStyle;
}

export type CustomInputProps = OwnProps & TextInputProps;

const CustomInput = (props: CustomInputProps) => {
  const {containerStyle, placeholder, style, selectionColor, placeholderTextColor} = props;
  const [value, setValue] = useState('');
  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        style={style}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};
export default CustomInput;