import React, {useState, useEffect} from 'react';
import {RefreshControl} from 'react-native';
import {
  EventList,
  EventListRenderItem,
  EventListEmptyComponent,
  EventListHeaderComponent,
  Loading,
} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {search, selectTypeOfEvent} from '../../utils';
import {MyEvent, MyEventType, Participant} from '../../types';
import {
  getActiveMyEventsAsync,
  getAttendedMyEventsByUserIdAsync,
  joinMyEventAsync,
} from '../../store/myEvent';

const MainScreen = () => {
  const loading = useAppSelector(state => state.myEvents.isLoading);
  const events: MyEvent[] = useAppSelector(
    state => state.myEvents.activeMyEvents,
  );
  const userId: number = useAppSelector(state => state.auth.userId);
  const myEventTypes: MyEventType[] = useAppSelector(
    state => state.myEventTypes.myEventTypes,
  );
  const [participant, setParticipant] = useState<Participant>({
    id: 0,
    myEventId: 0,
    userId,
  });
  const [searchText, setSearchText] = useState('');
  const [copyOfEvents, setCopyOfEvents] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(-1);
  const [selectedEventType, setSelectedEventType] = useState(-1);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getActiveMyEventsAsync(userId));
  }, []);

  useEffect(() => {
    setCopyOfEvents(events);
    setRefreshing(false);
  }, [events]);

  useEffect(() => {
    if (searchText !== '') setCopyOfEvents(search(events, searchText));
    else setCopyOfEvents(events);
  }, [searchText]);

  const onChangeSearchText = (e: string) => {
    setSearchText(e);
  };

  const selectEventType = (id: number) => {
    if (id == selectedEventType) {
      setSelectedEventType(-1);
      setCopyOfEvents(events);
    } else if (id !== -1) {
      setSelectedEventType(id);
      setCopyOfEvents(selectTypeOfEvent(events, id));
    } else setCopyOfEvents(events);
  };

  const selectEvent = ({item, index}: any) => {
    setParticipant({
      ...participant,
      myEventId: item.id,
    });
    if (item.id === selectedEvent) setSelectedEvent(-1);
    else setSelectedEvent(item.id);
  };

  const joinEvent = async () => {
    if (participant.myEventId !== 0)
      await dispatch(joinMyEventAsync(participant));
    await dispatch(getActiveMyEventsAsync(userId));
    await dispatch(getAttendedMyEventsByUserIdAsync(userId));
    setSelectedEvent(-1);
  };

  const onRefresh = async() => {
    setRefreshing(true);
    await dispatch(getActiveMyEventsAsync(userId));
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <EventList
        data={copyOfEvents}
        extraData={copyOfEvents}
        renderItem={({item, index}: any) => {
          return (
            <EventListRenderItem
              item={item}
              selectedEvent={selectedEvent}
              selectEvent={() => selectEvent({item})}
              joinEvent={() => joinEvent()}
            />
          );
        }}
        ListEmptyComponent={EventListEmptyComponent}
        ListHeaderComponent={
          <EventListHeaderComponent
            myEventTypes={myEventTypes}
            onChangeText={(e: string) => onChangeSearchText(e)}
            selectEventType={(id: number) => selectEventType(id)}
            selectedEventType={selectedEventType}
          />
        }
        RefreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {/* <Loading visible={loading} /> */}
    </SafeAreaView>
  );
};

export default MainScreen;
