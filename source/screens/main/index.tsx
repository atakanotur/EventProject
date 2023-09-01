import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Button, Input, EventList, Loading} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MyEvent} from '../../types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const MainScreen = () => {
  const loading = useAppSelector(state => state.myEvents.isLoading);
  const events: MyEvent[] = [
    {
      id: 1000,
      userId: 1007,
      myEventTypeId: 1,
      name: 'event1',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 25,
      participantCount: 10,
    },
    {
      id: 1001,
      userId: 1007,
      myEventTypeId: 1,
      name: 'event2',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 55,
      participantCount: 15,
    },
    {
      id: 1002,
      userId: 1005,
      myEventTypeId: 2,
      name: 'event3',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 35,
      participantCount: 6,
    },
    {
      id: 1003,
      userId: 1005,
      myEventTypeId: 2,
      name: 'event4',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 45,
      participantCount: 16,
    },
  ];

  const eventsRenderItem = (item: any) => {
    console.log('item', item.item);
    return (
      <TouchableOpacity style={styles.eventListContainer}>
        <View style={styles.eventListHeader}>
          <View style={styles.eventListName}>
            <Text text={item.item.name}/>
          </View>
          <View style={styles.eventListEventType}>
          <Icon name="cafe-outline" size={30} color="#900" />
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

  const eventsEmptyComponent = () => {
    return (
      <View>
        <Text text="Any event doesn't exist!" />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.bannerLeftIcon}>
          <Icon name='add' size={30} color="#900" />
        </View>
        <View style={styles.bannerMain}>
          <Text text="EventApp" style={styles.bannerText}/>
        </View>
        <View style={styles.bannerRightIcon}>
        <Icon name='search' size={30} color="#900"/>
        </View>
      </View>
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
