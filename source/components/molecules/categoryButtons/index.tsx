import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../..';
import colors from '../../../theme/colors';

interface CategoryButtonsProps {
  selectAttendedEvents: () => void;
  selectCreatedEvents: () => void;
  selectedEventsCategory: number;
}

const CategoryButtons = (props: CategoryButtonsProps) => {
  const {selectAttendedEvents, selectCreatedEvents, selectedEventsCategory} =
    props;
  return (
    <View style={styles.container}>
      <Button
        onPress={selectAttendedEvents}
        text="Attended Events"
        style={[
          styles.myEventCategoryButton,
          {
            backgroundColor:
              selectedEventsCategory === 0 ? colors.red : colors.white,
          },
        ]}
        textStyle={{
          color: selectedEventsCategory === 0 ? colors.white : colors.black,
        }}
      />
      <Button
        onPress={selectCreatedEvents}
        text="Created Events"
        style={[
          styles.myEventCategoryButton,
          {
            backgroundColor:
              selectedEventsCategory === 1 ? colors.red : colors.white,
          },
        ]}
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
    borderRadius: 15
  },
  myEventCategoryButton: {
    height: 40,
    backgroundColor: colors.red,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 10,
  },
});

export default CategoryButtons;
