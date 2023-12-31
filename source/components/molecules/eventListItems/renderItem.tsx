import {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Button, Text} from '../../atoms';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import colors from '../../../theme/colors';
import {EventTypeIcon} from '../../../utils/eventTypeIcon';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

interface EventListRenderItemProps {
  item: any;
  index?: number;
  selectEvent: (item: any) => void;
  selectedEvent?: number;
  joinEvent?: (item: any) => void;
  leaveEvent?: (item: any) => void;
  deleteEvent?: (item: any) => void;
  updateEvent?: (item: any) => void;
  eventDetails?: (item: any) => void;
}

interface EventButtonProps {
  buttonText: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const EventListRenderItem = (props: EventListRenderItemProps) => {
  const {
    item,
    selectEvent,
    selectedEvent,
    joinEvent,
    leaveEvent,
    deleteEvent,
    updateEvent,
    eventDetails,
  } = props;
  const id = item.id;
  const containerHeight = useSharedValue(120);
  const flex = useSharedValue(0);
  useEffect(() => {
    if (selectedEvent == id) {
      flex.value = withSpring(10);
      containerHeight.value = withSpring(160);
    } else {
      flex.value = withSpring(0);
      containerHeight.value = withSpring(120);
    }
  }, [selectedEvent]);
  const EventButton = ({buttonText, onPress, style}: EventButtonProps) => (
    <Animated.View
      style={[styles.eventListBottom, {flex: selectedEvent == -1 ? 0 : flex}]}>
      <Button
        text={buttonText}
        onPress={onPress}
        style={[
          styles.joinEventButton,
          {
            height: selectedEvent == id ? 30 : 0,
          },
          style,
        ]}
        textStyle={styles.joinEventButtonText}
      />
    </Animated.View>
  );

  return (
    <TouchableOpacity
      onPress={() => selectEvent(item)}
      disabled={selectedEvent == id ? true : false}>
      <Animated.View
        style={[
          styles.eventListContainer,
          {
            borderColor: selectedEvent == id ? colors.red : colors.white,
            height: selectedEvent == -1 ? 120 : containerHeight,
          },
        ]}>
        <View style={styles.eventListHeader}>
          <View style={styles.eventListName}>
            <Text text={item.name} />
          </View>
          <View style={styles.eventListEventType}>
            <Icon
              name={EventTypeIcon(item.myEventTypeId)}
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
              <Text text={item.participantLimit} />
              <Text text="/" />
              <Text text={item.participantCount} />
            </View>
          </View>
          <View style={styles.eventListDate}>
            <View style={styles.eventListBodyItemIcon}>
              <Icon name="calendar-outline" size={30} color="#900" />
            </View>
            <View style={styles.eventListBodyItemInformation}>
              <Text text={moment(item.date).format('LL')} numberOfLines={1} />
            </View>
          </View>
          <View style={styles.eventListLocation}>
            <View style={styles.eventListBodyItemIcon}>
              <Icon name="location-outline" size={30} color="#900" />
            </View>
            <View style={styles.eventListBodyItemInformation}>
              <Text text={item.address} numberOfLines={1} />
            </View>
          </View>
        </View>
        {joinEvent && (
          <EventButton
            buttonText="Join Event"
            onPress={() => joinEvent(item)}
          />
        )}
        {leaveEvent && eventDetails && (
          <Animated.View
            style={{
              flex: selectedEvent === id ? 10 : 0,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <EventButton
              buttonText="Event Details"
              onPress={() => eventDetails(item)}
            />
            <EventButton
              buttonText="Leave Event"
              onPress={() => leaveEvent(item)}
            />
          </Animated.View>
        )}
        {deleteEvent && updateEvent && (
          <Animated.View
            style={{
              flex: selectedEvent === id ? 10 : 0,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <EventButton
              buttonText="Update Event"
              onPress={() => updateEvent(item)}
            />
            <EventButton
              buttonText="Delete Event"
              onPress={() => deleteEvent(item)}
            />
          </Animated.View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventListContainer: {
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
  eventListParticipants: {
    flex: 2,
  },
  eventListDate: {
    flex: 3,
  },
  eventListLocation: {
    flex: 3,
  },
  eventListBottom: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinEventButton: {
    flex: 1,
    width: 150,
    backgroundColor: colors.red,
    borderRadius: 10,
  },
  joinEventButtonText: {
    color: colors.white,
  },
});

export default EventListRenderItem;
