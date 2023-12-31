import React from 'react';
import {
  View,
  TextInput,
  TextStyle,
  ViewStyle,
  StyleSheet,
  KeyboardType,
  ColorValue,
} from 'react-native';
import {TextInputProps, StyleProp} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface OwnProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  selectionColor?: ColorValue;
  placeholderTextColor?: ColorValue;
  onChangeText?: any;
  iconName?: any;
  iconColor?: any;
  iconSize?: any;
  keyboardType?: KeyboardType;
  defaultValue?: any;
  secureTextEntry?: boolean;
  editable?: boolean;
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
    secureTextEntry,
    editable
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
        secureTextEntry={secureTextEntry}
        editable={editable}
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
