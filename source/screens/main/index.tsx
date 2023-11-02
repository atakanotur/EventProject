import React, {useState, useEffect} from 'react';
import {
  Text,
  EventList,
  EventListRenderItem,
  EventListEmptyComponent,
  EventListHeaderComponent,
  Loading,
} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {search} from '../../utils/search';
import {selectTypeOfEvent} from '../../utils/selectType';
import {MyEvent, MyEventType} from '../../types';
import {getMyEventsAsync} from '../../store/myEvent';

const MainScreen = () => {
  const loading = useAppSelector(state => state.myEvents.isLoading);
  const events: MyEvent[] = useAppSelector(state => state.myEvents.myEvents);
  const myEventTypes: MyEventType[] = useAppSelector(
    state => state.myEventTypes.myEventTypes,
  );
  const [searchText, setSearchText] = useState('');
  const [copyOfEvents, setCopyOfEvents] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(-1);
  const [selectedEventType, setSelectedEventType] = useState(-1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyEventsAsync());
  }, []);

  useEffect(() => {
    console.log('events', events);
    setCopyOfEvents(events);
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

  const selectEvent = (item: any) => {
    console.log('selectEvent.item', item);
    if (item.item.id === selectedEvent) setSelectedEvent(-1);
    else setSelectedEvent(item.item.id);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <EventList
        data={copyOfEvents}
        extraData={copyOfEvents}
        renderItem={(item: any) => {
          return (
            <EventListRenderItem
              item={item}
              selectEvent={() => selectEvent(item)}
              selectedEvent={selectedEvent}
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
        // ListFooterComponent={}
        // ListFooterComponentStyle={}
      />
      {/* <Loading visible={loading} /> */}
    </SafeAreaView>
  );
};

export default MainScreen;
