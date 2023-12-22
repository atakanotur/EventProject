import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {Text} from '..';
import colors from '../../../theme/colors';

interface ToastMessageProps {
  type?: 'error' | 'success' | 'info';
  message?: string;
  duration?: number | 1000;
}

const screenWidth = Dimensions.get('screen').width;

const ToastMessage = React.forwardRef((props: ToastMessageProps, ref) => {
  const {message, type, duration} = props;
  const [disabled, setDisabled] = useState(false);
  const bottom = useSharedValue(-40);

  useEffect(() => {
    console.log('bottom', bottom.value);
  }, [bottom]);

  const show = () => {
    setDisabled(true);
    slideShowAnimation();
    setTimeout(() => autoHide(), duration);
  };

  const autoHide = () => {
    slideHideAnimation();
    setDisabled(true);
  };

  const slideShowAnimation = () => {
    bottom.value = withSpring(40);
  };

  const slideHideAnimation = () => {
    bottom.value = withSpring(-40);
  };

  const messageColor = () => {
    if (type === 'success') return colors.green;
    else if (type === 'info') return colors.blue;
    else return colors.red;
  };

  React.useImperativeHandle(ref, () => ({
    show: show,
  }));

  if (!disabled) {
    return null;
  }
  return (
    <Animated.View style={[styles.container, {bottom: bottom}]}>
      <View style={styles.shadow}>
        <Text
          text={message}
          containerStyle={[
            styles.messageContainer,
            {borderColor: messageColor()},
          ]}
        />
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: screenWidth,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    backgroundColor: colors.white,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
  },
  messageContainer: {
    borderLeftWidth: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
});

export default ToastMessage;
