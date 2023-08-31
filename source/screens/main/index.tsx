import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text, Button, Input, EventList, Loading} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MyEvent} from '../../types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';

const MainScreen = () => {
  const loading = useAppSelector(state => state.myEvents.isLoading);
  const events: MyEvent[] = [
    {
      id: 1000,
      userId: 1007,
      myEventTypeId: 1,
      name: 'event1',
      address: 'address address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 25,
      participantCount: 10,
    },
    {
      id: 1001,
      userId: 1007,
      myEventTypeId: 1,
      name: 'event2',
      address: 'address address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 55,
      participantCount: 15,
    },
    {
      id: 1002,
      userId: 1005,
      myEventTypeId: 2,
      name: 'event3',
      address: 'address address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 35,
      participantCount: 6,
    },
  ];

  const eventsRenderItem = (item: any) => {
    console.log('item', item.item);
    return (
      <View style={styles.eventListContainer}>
        <View style={styles.eventListHeader}>
          <View style={styles.eventListName}></View>
          <View style={styles.eventListEventType}></View>
        </View>
        <View style={styles.eventListBody}>
          <View style={styles.eventListParticipants}>
            <View style={styles.eventListBodyItemIcon}></View>
            <View style={styles.eventListBodyItemInformation}>
              <Text text={item.item.participantLimit} />
              <Text text="/" />
              <Text text={item.item.participantCount} />
            </View>
          </View>
          <View style={styles.eventListDate}>
            <View style={styles.eventListBodyItemIcon}></View>
            <View style={styles.eventListBodyItemInformation}>
              <Text text={item.date} />
            </View>
          </View>
          <View style={styles.eventListLocation}>
            <View style={styles.eventListBodyItemIcon}></View>
            <View style={styles.eventListBodyItemInformation}>
              <Text text={item.address} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const eventsEmptyComponent = () => {
    return (
      <View>
        <Text text="Any event doesn't exist!" />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text text="Main Screen" />
      <EventList
        data={events}
        extraData={events}
        renderItem={eventsRenderItem}
        ListEmptyComponent={eventsEmptyComponent}
        // ListHeaderComponent={}
        // ListHeaderComponentStyle={}
        // ListFooterComponent={}
        // ListFooterComponentStyle={}
      />
      <Loading visible={loading} />
    </SafeAreaView>
  );
};

export default MainScreen;
