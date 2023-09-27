import {FlatList, StyleSheet} from 'react-native';
import {MyEventType} from '../../../types';

interface EventTypeListProps {
  data?: MyEventType[];
  extraData?: MyEventType[];
  renderItem?: any;
  ListEmptyComponent?: any;
  ListHeaderComponent?: any;
  ListHeaderComponentStyle?: any;
  ListFooterComponent?: any;
  ListFooterComponentStyle?: any;
}

const EventTypeList = (props: EventTypeListProps) => {
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
      style={styles.eventTypeList}
    />
  );
};

const styles = StyleSheet.create({
  eventTypeList: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
  },
});

export default EventTypeList;
