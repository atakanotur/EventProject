import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TextInput,
  TextStyle,
  ViewStyle,
  StyleSheet,
  KeyboardTypeOptions,
  KeyboardType,
} from 'react-native';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface OwnProps {
  label?: string;
  containerStyle?: ViewStyle;
  placeholder?: string;
  style?: TextStyle;
  selectionColor?: TextStyle;
  placeholderTextColor?: TextStyle;
  onChangeText?: any;
  iconName?: any;
  iconColor?: any;
  iconSize?: any;
  keyboardType?: KeyboardType;
  defaultValue?: any;
}

export type CustomInputProps = OwnProps & TextInputProps;

const CustomInput = (props: CustomInputProps) => {
  const {
    containerStyle,
    placeholder,
    style,
    selectionColor,
    placeholderTextColor,
    onChangeText,
    iconName,
    iconColor,
    iconSize,
    keyboardType,
    defaultValue,
  } = props;
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Icon name={iconName} color={iconColor} size={iconSize} />
      <TextInput
        placeholder={placeholder}
        onChangeText={e => onChangeText(e)}
        style={[styles.inputStyle, style]}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        defaultValue={defaultValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
  },
});

export default CustomInput;
