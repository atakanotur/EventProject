import React, {useState, useEffect} from 'react';
import {View, TextInput, TextStyle} from 'react-native';

interface CustomInputProps {
  placeholder?: string;
  onChangeText: (text: string) => void;
  style?: TextStyle;
}

const CustomInput = ({placeholder, onChangeText, style}: CustomInputProps) => {
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
