import React, {useState, useEffect} from 'react';
import {TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import {Text} from '../';

interface CustomButtonProps {
  text?: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton = ({text, onPress, style, textStyle}: CustomButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (isPressed) {
      onPress();
    }
  }, [isPressed, onPress]);

  return (
    <TouchableOpacity style={style} onPress={() => setIsPressed(true)}>
      <Text text={text} style={textStyle} />
    </TouchableOpacity>
  );
};

export default CustomButton;
