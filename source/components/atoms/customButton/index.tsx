import React, {useState, useEffect} from 'react';
import {TouchableOpacity, TextStyle, ViewStyle, StyleSheet} from 'react-native';
import {Text} from '../';

interface CustomButtonProps {
  text?: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  textContainerStyle?: ViewStyle;
}

const CustomButton = ({
  text,
  onPress,
  style,
  textStyle,
  textContainerStyle,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={() => onPress()}>
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
