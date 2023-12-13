import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ColorValue,
  ViewStyle,
} from 'react-native';
import {Text} from '../../atoms';
import colors from '../../../theme/colors';
import {MyEvent} from '../../../types';

interface EventTypeListRenderItemProps {
  item: MyEvent;
  index: number;
  selectedEventType: number;
  selectEventType: (item: MyEvent, index: number) => void;
  renderItemContainerStyle?: StyleProp<ViewStyle>;
  selectedTypeColor?: ColorValue;
  titleColor?: ColorValue;
  selectedTypeTitleColor?: ColorValue;
}

const EventTypeListRenderItem = (props: EventTypeListRenderItemProps) => {
  const {
    item,
    index,
    selectedEventType,
    selectEventType,
    renderItemContainerStyle,
    selectedTypeColor,
    selectedTypeTitleColor,
    titleColor,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.type,
        selectedEventType === index && {
          backgroundColor: selectedTypeColor,
          borderColor: selectedTypeColor,
        },
        renderItemContainerStyle,
      ]}
      onPress={() => selectEventType(item, index)}>
      <Text
        text={item.name}
        style={[
          styles.title,
          {
            color:
              selectedEventType == index ? selectedTypeTitleColor : titleColor,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  type: {
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 5,
    padding: 5,
    height: 30,
  },
  title: {},
});

export default EventTypeListRenderItem;
