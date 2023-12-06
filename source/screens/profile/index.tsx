import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {
  Button,
  CategoryButtons,
  EventList,
  EventListEmptyComponent,
  EventListRenderItem,
  Loading,
} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {AddEventModal} from '../../components/organisms/addEventModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useAppDispatch, useAppSelector} from '../../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  addMyEventAsync,
  deleteMyEventAsync,
  getActiveMyEventsAsync,
  getMyEventsByUserIdAsync,
  leaveMyEventAsync,
} from '../../store/myEvent';
import {MyEvent, Participant} from '../../types';
import {getParticipantsAsync} from '../../store/participant';
import {getAttendedMyEventsByUserIdAsync} from '../../store/myEvent';

const source = require('../../theme/a1.png');

const ProfileScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const [addEventModalVisible, setAddEventModalVisible] = useState(false);

  const [eventDate, setEventDate] = useState(new Date());

  const [eventDateVisible, setEventDateVisible] = useState(false);

  const userId = useAppSelector(state => state.auth.userId);

  const attendedMyEvents: MyEvent[] = useAppSelector(
    state => state.myEvents.attendedMyEvents,
  );

  const createdMyEvents: MyEvent[] = useAppSelector(
    state => state.myEvents.myEventsByUserId,
  );

  const deletedMyEvent: MyEvent = useAppSelector(
    state => state.myEvents.myEvent,
  );

  const loading = useAppSelector(state => state.myEvents.isLoading);

  const [myEvent, setMyEvent] = useState<MyEvent>({
    id: 0,
    myEventTypeId: 0,
    userId: 0,
    name: '',
    address: '',
    date: new Date(),
    participantLimit: 0,
    participantCount: 0,
  });

  const [participant, setParticipant] = useState<Participant>({
    id: 0,
    myEventId: 0,
    userId,
  });

  const [selectedEvent, setSelectedEvent] = useState(-1);

  const [refreshing, setRefreshing] = useState(false);

  const logout = async () => {
    await AsyncStorage.setItem('eventProjectEmail', '');
    await AsyncStorage.setItem('eventProjectPassword', '');
    navigation.navigate('Auth');
  };

  const [selectedEventsCategory, setSelectedEventCategory] = useState(0);

  useEffect(() => {
    console.log('attendedMyEvents', attendedMyEvents);
    console.log('createdMyEvents', createdMyEvents);
    setRefreshing(false);
  }, [attendedMyEvents, createdMyEvents]);

  useEffect(() => {
    console.log('userId', userId);
    dispatch(getParticipantsAsync());
    dispatch(getAttendedMyEventsByUserIdAsync(userId));
    dispatch(getMyEventsByUserIdAsync(userId));
  }, []);

  const handleConfirmDateTime = (e: any) => {
    console.log('e', e);
    setEventDate(e);
    setEventDateVisible(false);
    console.log('handleConfirmDateTime', eventDate);
  };

  const openCreateEvent = () => {
    setAddEventModalVisible(true);
    console.log('addEvent', addEventModalVisible);
  };

  const createEvent = () => {
    dispatch(addMyEventAsync(myEvent));
  };

  const closeIconOnPress = () => {
    changeAddEventModalVisible();
    console.log('closeIconOnPress', addEventModalVisible);
  };

  const changeEventDateVisible = () => {
    setEventDateVisible(!eventDateVisible);
    console.log('changeEventDateVisible', eventDateVisible);
  };

  const changeAddEventModalVisible = () => {
    setAddEventModalVisible(!addEventModalVisible);
    console.log('changeAddEventModalVisible', addEventModalVisible);
  };

  const onChangeEventNameText = (e: string) => {
    console.log('onChangeEventNameText', e);
    setMyEvent({
      ...myEvent,
      name: e,
    });
  };

  const onChangeEventAddressText = (e: string) => {
    console.log('onChangeEventAddressText', e);
    setMyEvent({
      ...myEvent,
      address: e,
    });
  };

  const onChangeParticipantLimitText = (e: number) => {
    console.log('onChangeParticipantLimitText', e);
    setMyEvent({
      ...myEvent,
      participantLimit: e,
    });
  };

  const selectAttendedEvents = () => {
    setSelectedEventCategory(0);
    setSelectedEvent(-1);
  };

  const selectCreatedEvents = () => {
    setSelectedEventCategory(1);
    setSelectedEvent(-1);
  };

  const selectEvent = ({item, index}: any) => {
    setParticipant({
      ...participant,
      myEventId: item.id,
    });
    if (item.id === selectedEvent) setSelectedEvent(-1);
    else setSelectedEvent(item.id);
  };

  const leaveEvent = async () => {
    if (participant.myEventId !== 0)
      await dispatch(leaveMyEventAsync(participant));
    await dispatch(getAttendedMyEventsByUserIdAsync(userId));
    await dispatch(getActiveMyEventsAsync(userId));
    setSelectedEvent(-1);
  };

  const deleteEvent = async ({item, index}: any) => {
    await dispatch(deleteMyEventAsync(item));
    await dispatch(getMyEventsByUserIdAsync(userId));
    setSelectedEvent(-1);
  };

  const onRefreshCreatedList = () => {
    dispatch(getMyEventsByUserIdAsync(userId));
    setRefreshing(true);
  };
  const onRefreshAttendedList = () => {
    dispatch(getAttendedMyEventsByUserIdAsync(userId));
    setRefreshing(true);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.top}>
        <View style={styles.options}>
          <TouchableOpacity onPress={logout}>
            <Icon name="log-out-outline" size={35} color={colors.blue} />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={source}
          style={styles.topImageBackground}
          imageStyle={styles.topImageBackgroundImage}
          resizeMode="contain">
          <TouchableOpacity onPress={openCreateEvent}>
            <Icon name="add-circle-outline" color={colors.red} size={75} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.bottom}>
        <CategoryButtons
          selectAttendedEvents={selectAttendedEvents}
          selectCreatedEvents={selectCreatedEvents}
          selectedEventsCategory={selectedEventsCategory}
        />
        {selectedEventsCategory == 0 ? (
          <EventList
            data={attendedMyEvents}
            extraData={attendedMyEvents}
            renderItem={({item, index}: any) => {
              return (
                <EventListRenderItem
                  item={item}
                  selectEvent={() => selectEvent({item})}
                  selectedEvent={selectedEvent}
                  leaveEvent={() => leaveEvent()}
                />
              );
            }}
            ListEmptyComponent={EventListEmptyComponent}
            RefreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefreshAttendedList}
              />
            }
          />
        ) : (
          <EventList
            data={createdMyEvents}
            extraData={createdMyEvents}
            renderItem={({item, index}: any) => {
              return (
                <EventListRenderItem
                  item={item}
                  selectEvent={() => selectEvent({item})}
                  selectedEvent={selectedEvent}
                  deleteEvent={() => deleteEvent({item})}
                />
              );
            }}
            ListEmptyComponent={EventListEmptyComponent}
            RefreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefreshCreatedList}
              />
            }
          />
        )}
      </View>
      <AddEventModal
        visible={addEventModalVisible}
        transparent={true}
        animationType="slide"
        closeIconOnPress={closeIconOnPress}
        eventDateOnPress={changeEventDateVisible}
        eventDateValue={eventDate}
        onChangeEventNameText={onChangeEventNameText}
        onChangeEventAddressText={onChangeEventAddressText}
        onChangeParticipantLimitText={onChangeParticipantLimitText}
        createButtonOnPress={createEvent}
      />
      <DateTimePickerModal
        testID="test"
        isVisible={eventDateVisible}
        mode="datetime"
        onConfirm={handleConfirmDateTime}
        onCancel={changeEventDateVisible}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
