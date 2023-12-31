import React from 'react';
import {
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  StyleSheet,
  StyleProp,
} from 'react-native';
import {Text} from '../';

interface CustomButtonProps {
  text?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const CustomButton = ({
  text,
  onPress,
  style,
  textStyle,
  textContainerStyle,
  disabled,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => onPress()}
      disabled={disabled}>
      <Text
        text={text}
        style={[styles.text, textStyle]}
        containerStyle={[styles.textContainer, textContainerStyle]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});

export default CustomButton;
