import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from '../../atoms';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import colors from '../../../theme/colors';
import {EventTypeIcon} from '../../../utils/eventTypeIcon';

interface EventListRenderItemProps {
  item: any;
  selectEvent?: any;
  selectedEvent?: number;
}

export const EventListRenderItem = (props: EventListRenderItemProps) => {
  const {item, selectEvent, selectedEvent} = props;
  const id = item.item.id;
  return (
    <TouchableOpacity
      style={[
        styles.eventListContainer,
        {borderColor: selectedEvent == id ? colors.red : colors.white},
      ]}
      onPress={() => selectEvent(item)}>
      <View style={styles.eventListHeader}>
        <View style={styles.eventListName}>
          <Text text={item.item.name} />
        </View>
        <View style={styles.eventListEventType}>
          <Icon
            name={EventTypeIcon(item.item.myEventTypeId)}
            size={30}
            color="#900"
          />
        </View>
      </View>
      <View style={styles.eventListBody}>
        <View style={styles.eventListParticipants}>
          <View style={styles.eventListBodyItemIcon}>
            <Icon name="person-outline" size={30} color="#900" />
          </View>
          <View style={styles.eventListBodyItemInformation}>
            <Text text={item.item.participantLimit} />
            <Text text="/" />
            <Text text={item.item.participantCount} />
          </View>
        </View>
        <View style={styles.eventListDate}>
          <View style={styles.eventListBodyItemIcon}>
            <Icon name="calendar-outline" size={30} color="#900" />
          </View>
          <View style={styles.eventListBodyItemInformation}>
            <Text text={moment(item.item.date).format('LL')} />
          </View>
        </View>
        <View style={styles.eventListLocation}>
          <View style={styles.eventListBodyItemIcon}>
            <Icon name="location-outline" size={30} color="#900" />
          </View>
          <View style={styles.eventListBodyItemInformation}>
            <Text text={item.item.address} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventListContainer: {
    height: 120,
    marginTop: 10,
    padding: 5,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventListHeader: {
    flexDirection: 'row',
    flex: 2,
  },
  eventListName: {
    flex: 5,
  },
  eventListEventType: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventListBody: {
    flexDirection: 'row',
    flex: 5,
  },
  eventListParticipants: {
    flex: 1,
  },
  eventListBodyItemIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventListBodyItemInformation: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
  eventListDate: {
    flex: 1,
  },
  eventListLocation: {
    flex: 1,
  },
});

export default EventListRenderItem;
