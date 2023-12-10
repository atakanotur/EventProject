import {FlatList, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {MyEventType} from '../../../types';
import colors from '../../../theme/colors';

interface EventTypeListProps {
  data?: MyEventType[];
  extraData?: MyEventType[];
  renderItem?: any;
  contentContainerStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  numColumns?: number;
  scrollEnabled?: boolean;
}

const EventTypeList = (props: EventTypeListProps) => {
  const {
    data,
    extraData,
    renderItem,
    contentContainerStyle,
    horizontal,
    numColumns,
    scrollEnabled
  } = props;

  return (
    <FlatList
      data={data}
      extraData={extraData}
      renderItem={renderItem}
      horizontal={horizontal}
      contentContainerStyle={[
        styles.contentContainerStyle,
        contentContainerStyle,
      ]}
      showsHorizontalScrollIndicator={false}
      numColumns={numColumns}
      scrollEnabled={scrollEnabled}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
  },
});

export default EventTypeList;
