import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import {Text} from '../../atoms';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import colors from '../../../theme/colors';

interface CustomerLoadingProps {
  visible: boolean;
}

const {width, height} = Dimensions.get('window');
const circleLenght = 250;
const r = circleLenght / (2 * Math.PI);

const CustomLoading = ({visible}: CustomerLoadingProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withSequence(withTiming(1, {duration: 2000}));
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circleLenght * (1 - progress.value),
  }));

  useEffect(() => {
    setIsLoading(visible);
  }, [visible]);

  if (!isLoading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.red} />
      {/* <Svg style={styles.svg}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={r}
          stroke={colors.red}
          strokeWidth={30}
          fillOpacity={0}
        />
        <AnimatedCircle
          cx={width}
          cy={height}
          r={r}
          stroke={colors.red}
          strokeWidth={15}
          fillOpacity={0}
          strokeDasharray={circleLenght}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
        />
      </Svg> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,1.5)',
  },
  svg: {
    position: 'absolute',
    bottom: 69,
  },
});

export default CustomLoading;
