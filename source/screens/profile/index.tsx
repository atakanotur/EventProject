import React, {useEffect, useState} from 'react';
import {Modal, View, ImageBackground} from 'react-native';
import {
  Loading,
  Button,
  Input,
  Text,
  EventList,
  EventListRenderItem,
} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {AddEventModal} from '../../components/organisms/addEventModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useAppDispatch, useAppSelector} from '../../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const source = require('../../theme/a1.png');

const ProfileScreen = ({navigation}: any) => {
  const [addEventModalVisible, setAddEventModalVisible] = useState(false);
  const [eventDate, setEventDate] = useState(new Date());
  const [eventDateVisible, setEventDateVisible] = useState(false);
  const myEvents = useAppSelector(state => state.myEvents.myEvents);
  const logout = async () => {
    await AsyncStorage.setItem('eventProjectEmail', '');
    await AsyncStorage.setItem('eventProjectPassword', '');
    navigation.navigate('Auth');
  };
  const handleConfirmDateTime = (e: any) => {
    console.log('e', e);
    setEventDate(e);
    setEventDateVisible(false);
    console.log('handleConfirmDateTime', eventDate);
  };
  const addEvent = () => {
    setAddEventModalVisible(true);
    console.log('addEvent', addEventModalVisible);
  };
  const closeIconOnPress = () => {
    // setAddEventModalVisible(false);
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
  };
  const onChangeEventAddressText = (e: string) => {
    console.log('onChangeEventAddressText', e);
  };
  const onChangeParticipantLimitText = (e: number) => {
    console.log('');
  };
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.top}>
        <View style={styles.options}>
          <Icon
            name="log-out-outline"
            size={35}
            color={colors.blue}
            onPress={logout}
          />
        </View>
        <ImageBackground
          source={source}
          style={styles.topImageBackground}
          imageStyle={styles.topImageBackgroundImage}
          resizeMode="contain">
          <Button
            text="+"
            onPress={() => addEvent()}
            style={styles.addButton}
            textStyle={styles.addButtonText}
          />
        </ImageBackground>
      </View>
      <View style={styles.bottom}>
        <EventList
          data={myEvents}
          renderItem={(item: any) => {
            return <EventListRenderItem item={item} />;
          }}
        />
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
