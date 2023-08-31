import {
  FlatList,
  StyleSheet,
} from 'react-native';
import {MyEvent} from '../../../types';

interface EventListProps {
  data?: MyEvent[];
  extraData?: MyEvent[];
  renderItem?: any;
  ListEmptyComponent?: any;
  ListHeaderComponent?: any;
  ListHeaderComponentStyle?: any;
  ListFooterComponent?: any;
  ListFooterComponentStyle?: any;
}

export const EventList = ({
  data,
  extraData,
  renderItem,
  ListEmptyComponent,
  ListHeaderComponent,
  ListHeaderComponentStyle,
  ListFooterComponent,
  ListFooterComponentStyle,
}: EventListProps) => {
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
      // style={styles.eventList}
    />
  );
};

const styles = StyleSheet.create({
});
