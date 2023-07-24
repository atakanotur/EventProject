import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, TextStyle} from 'react-native';
import {TextInputProps} from 'react-native';

interface OwnProps {
  label?: string;
  placeholder?: string;
  style?: TextStyle;
}

export type CustomInputProps = OwnProps & TextInputProps;

const CustomInput = (props: CustomInputProps) => {
  const {placeholder, style} = props;
  const [value, setValue] = useState('');
  return (
    <View style={style}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};
export default CustomInput;