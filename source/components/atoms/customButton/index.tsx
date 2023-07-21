import React, {useState, useEffect} from 'react';
import {TouchableOpacity, TextStyle} from 'react-native';
import {Text} from '../';

interface CustomButtonProps {
  text?: string;
  onPress: () => void;
  style?: TextStyle;
}

const CustomButton = ({text, onPress, style}: CustomButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (isPressed) {
      onPress();
    }
  }, [isPressed, onPress]);

  return (
    <TouchableOpacity style={style} onPress={() => setIsPressed(true)}>
      <Text text={text} />
    </TouchableOpacity>
  );
};

export default CustomButton;
