import React, {useEffect, useState} from 'react';
import {Modal, View} from 'react-native';
import {Loading, Button, Input, Text} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {AddEventModal} from '../../components/organisms/addEventModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ProfileScreen = () => {
  const [addEventModalVisible, setAddEventModalVisible] = useState(true);
  const [eventDate, setEventDate] = useState(new Date());
  const [eventDateVisible, setEventDateVisible] = useState(false);
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
    <SafeAreaView style={styles.container} edges={[]}>
      <View style={styles.top}>
        <Button text="+" onPress={() => addEvent()} />
      </View>
      <View style={styles.bottom}></View>
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
