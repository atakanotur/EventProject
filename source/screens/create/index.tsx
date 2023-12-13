import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Button, Input, Loading} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {MyEvent, MyEventType} from '../../types';
import {addMyEventAsync, getMyEventsByUserIdAsync} from '../../store/myEvent';
import {EventTypeListRenderItem} from '../../components/molecules';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {EventTypeList} from '../../components/organisms';
import colors from '../../theme/colors';
import {CommonActions} from '@react-navigation/native';
import moment from 'moment';

const CreateScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(state => state.myEvents.isLoading);

  const myEventTypes = useAppSelector(state => state.myEventTypes.myEventTypes);

  const userId = useAppSelector(state => state.auth.userId);

  const [selectedEventType, setSelectedEventType] = useState(-1);

  const [eventDateVisible, setEventDateVisible] = useState(false);

  const [myEvent, setMyEvent] = useState<MyEvent>({
    id: 0,
    myEventTypeId: 0,
    userId,
    name: '',
    address: '',
    date: new Date(),
    participantLimit: 0,
    participantCount: 0,
  });

  const handleConfirmDateTime = (e: any) => {
    var date: any = moment(e).format();
    setMyEvent({
      ...myEvent,
      date: date,
    });
    setEventDateVisible(false);
  };

  const createEvent = async () => {
    console.log('myEvent', myEvent);
    await dispatch(addMyEventAsync(myEvent));
    await dispatch(getMyEventsByUserIdAsync(userId));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Tab'}],
      }),
    );
  };

  const cancelEvent = () => {
    navigation.goBack();
  };

  const changeEventDateVisible = () => {
    setEventDateVisible(!eventDateVisible);
    console.log('changeEventDateVisible', eventDateVisible);
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

  const selectEventType = (item: MyEventType, index: number) => {
    if (item.id == selectedEventType) {
      setSelectedEventType(-1);
    } else {
      setSelectedEventType(index);
      setMyEvent({
        ...myEvent,
        myEventTypeId: item.id,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View>
        <EventTypeList
          data={myEventTypes}
          extraData={myEventTypes}
          numColumns={3}
          scrollEnabled={false}
          renderItem={({item, index}: any) => {
            return (
              <EventTypeListRenderItem
                item={item}
                index={index}
                selectEventType={(item: MyEventType, index: number) =>
                  selectEventType(item, index)
                }
                selectedEventType={selectedEventType}
                renderItemContainerStyle={styles.eventTypeListContainer}
                selectedTypeColor={colors.red}
                selectedTypeTitleColor={colors.white}
              />
            );
          }}
        />
        <Input
          containerStyle={styles.modalItemContainer}
          onChangeText={(e: string) => onChangeEventNameText(e)}
          placeholder="Event Name"
          style={styles.modalInput}
        />
        <Button
          onPress={changeEventDateVisible}
          style={styles.modalItemContainer}
          text={moment(myEvent.date).format('MMMM Do YYYY, h:mm:ss a')}
        />
        <Input
          containerStyle={styles.modalItemContainer}
          onChangeText={(e: string) => onChangeEventAddressText(e)}
          placeholder="Event Address"
          style={styles.modalInput}
        />
        <Input
          keyboardType="number-pad"
          containerStyle={styles.modalItemContainer}
          onChangeText={(e: string) =>
            onChangeParticipantLimitText(parseInt(e))
          }
          placeholder="Participant Limit"
          style={styles.modalInput}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          onPress={createEvent}
          style={styles.createButton}
          text="Create Your Super Event"
          textStyle={styles.createButtonText}
        />
        <Button
          onPress={cancelEvent}
          style={styles.cancelButton}
          text="Cancel"
          textStyle={styles.cancelButtonText}
        />
      </View>
      <DateTimePickerModal
        testID="test"
        isVisible={eventDateVisible}
        mode="datetime"
        onConfirm={handleConfirmDateTime}
        onCancel={changeEventDateVisible}
      />
      <Loading visible={loading} />
    </SafeAreaView>
  );
};

export default CreateScreen;
