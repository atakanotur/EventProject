import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';

interface CustomTextProps {
  text: string | any;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

const CustomText = ({
  text,
  containerStyle,
  style,
  numberOfLines,
}: CustomTextProps) => {
  const [state, setState] = useState(text);

  useEffect(() => {
    setState(text);
  }, [text]);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        style={[styles.text, style]}
        numberOfLines={numberOfLines}
        ellipsizeMode="tail">
        {state}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default CustomText;
