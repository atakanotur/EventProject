import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
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

const MainScreen = () => {
  const myEventsSelector = useAppSelector(state => state.myEvents);
  const myEventTypesSelector = useAppSelector(state => state.myEventTypes);
  const loading = myEventsSelector.isLoading;
  const events = myEventsSelector.myEvents;
  const myEventTypes = myEventTypesSelector.myEventTypes;
  const [searchText, setSearchText] = useState('');
  const [copyOfEvents, setCopyOfEvents] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(-1);
  const [selectedEventType, setSelectedEventType] = useState(-1);

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
    <SafeAreaView style={styles.container} edges={[]}>
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
      <Loading visible={loading} />
    </SafeAreaView>
  );
};

export default MainScreen;
