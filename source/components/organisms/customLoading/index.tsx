import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Text} from '../../atoms';
interface CustomerLoadingProps {
  visible: boolean;
}

const CustomLoading = ({visible}: CustomerLoadingProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(visible);
  }, [visible]);

  if (!isLoading) return null;

  return (
    <View>
      <ActivityIndicator size={'large'} />
      <Text text="Loading ..." style={styles.text} />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  text: {
    margin: 10,
    fontSize: 18,
  },
});

export default CustomLoading;
