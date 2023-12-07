import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Button} from '../..';
import colors from '../../../theme/colors';
import Animated, {
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface CategoryButtonsProps {
  selectAttendedEvents: () => void;
  selectCreatedEvents: () => void;
  selectedEventsCategory: number;
}

const CategoryButtons = (props: CategoryButtonsProps) => {
  const {selectAttendedEvents, selectCreatedEvents, selectedEventsCategory} =
    props;
  const windowWidth = Dimensions.get('window');
  const activeButtonPosition = useSharedValue(0);
  useEffect(() => {
    if (selectedEventsCategory === 0) {
      activeButtonPosition.value = withTiming(5, {duration: 350});
    } else {
      activeButtonPosition.value = withTiming(windowWidth.width - 140, {
        duration: 350,
      });
    }
  }, [selectedEventsCategory]);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.selectedMyEventCategory,
          {position: 'absolute', left: activeButtonPosition, top: 5},
        ]}></Animated.View>
      <Button
        onPress={selectAttendedEvents}
        text="Attended Events"
        style={styles.myEventCategoryButton}
        textStyle={{
          color: selectedEventsCategory === 0 ? colors.white : colors.black,
        }}
      />
      <Button
        onPress={selectCreatedEvents}
        text="Created Events"
        style={styles.myEventCategoryButton}
        textStyle={{
          color: selectedEventsCategory === 1 ? colors.white : colors.black,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: colors.red,
    padding: 5,
    borderRadius: 15,
  },
  myEventCategoryButton: {
    height: 40,
    width: 120,
  },
  selectedMyEventCategory: {
    height: 40,
    width: 120,
    backgroundColor: colors.red,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 10,
  },
});

export default CategoryButtons;
