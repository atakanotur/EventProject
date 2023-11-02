import {FlatList, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {MyEvent} from '../../../types';

interface EventListProps {
  data: MyEvent[];
  extraData?: MyEvent[];
  renderItem: any;
  ListEmptyComponent?: any;
  ListHeaderComponent?: any;
  ListHeaderComponentStyle?: StyleProp<ViewStyle>;
  ListFooterComponent?: any;
  ListFooterComponentStyle?: StyleProp<ViewStyle>;
}

const EventList = (props: EventListProps) => {
  const {
    data,
    extraData,
    renderItem,
    ListEmptyComponent,
    ListHeaderComponent,
    ListHeaderComponentStyle,
    ListFooterComponent,
    ListFooterComponentStyle,
  } = props;
  return (
    <FlatList
      data={data}
      extraData={extraData}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListHeaderComponentStyle={ListHeaderComponentStyle}
      ListFooterComponent={ListFooterComponent}
      ListFooterComponentStyle={ListFooterComponentStyle}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.eventList}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  eventList: {
    flex: 1,
  },
  contentContainerStyle: {},
});

export default EventList;
