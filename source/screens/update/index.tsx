import React, {useState, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {Button, Input, Loading, ToastMessage} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {MyEvent, MyEventType} from '../../types';
import {
  getMyEventsByUserIdAsync,
  updateMyEventAsync,
} from '../../store/myEvent';
import {EventTypeListRenderItem} from '../../components/molecules';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {EventTypeList} from '../../components/organisms';
import colors from '../../theme/colors';
import {CommonActions} from '@react-navigation/native';
import moment from 'moment';

const UpdateScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(state => state.myEvents.isLoading);

  const myEvent = useAppSelector(state => state.myEvents.myEvent);

  const myEventTypes = useAppSelector(state => state.myEventTypes.myEventTypes);

  const userId = useAppSelector(state => state.auth.userId);

  const [selectedEventType, setSelectedEventType] = useState(-1);

  const [eventDateVisible, setEventDateVisible] = useState(false);

  const [updatedMyEvent, setUpdatedMyEvent] = useState<MyEvent>({
    ...myEvent,
  });

  const eventUpdatedErrorToastMessage = useRef<{show: () => void}>(null);

  useEffect(() => {
    console.log('myEvent', myEvent);
    console.log('updatedMyEvent', updatedMyEvent);
    setSelectedEventType(myEvent.myEventTypeId - 1);
  }, []);

  useEffect(() => {
    console.log('handleConfirmDateTime', myEvent.date);
  }, [myEvent.date]);

  const handleConfirmDateTime = (e: any) => {
    var date: any = moment(e).format();
    setUpdatedMyEvent({
      ...updatedMyEvent,
      date: date,
    });
    setEventDateVisible(false);
  };

  const updateEvent = async () => {
    console.log('myEvent', myEvent);
    await dispatch(updateMyEventAsync(updatedMyEvent)).then(
      async (response: any) => {
        if (response.payload?.status === 200) {
          await dispatch(getMyEventsByUserIdAsync(userId));
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Tab'}],
            }),
          );
        } else eventUpdatedErrorToastMessage.current?.show();
      },
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
    setUpdatedMyEvent({
      ...updatedMyEvent,
      name: e,
    });
  };

  const onChangeEventAddressText = (e: string) => {
    console.log('onChangeEventAddressText', e);
    setUpdatedMyEvent({
      ...updatedMyEvent,
      address: e,
    });
  };

  const onChangeParticipantLimitText = (e: number) => {
    console.log('onChangeParticipantLimitText', e);
    setUpdatedMyEvent({
      ...updatedMyEvent,
      participantLimit: e,
    });
  };

  const selectEventType = (item: MyEventType, index: number) => {
    if (index == selectedEventType) {
      setSelectedEventType(-1);
    } else {
      setSelectedEventType(index);
      setUpdatedMyEvent({
        ...updatedMyEvent,
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
          defaultValue={myEvent.name}
        />
        <Button
          onPress={changeEventDateVisible}
          style={styles.modalItemContainer}
          text={moment(updatedMyEvent.date).format('MMMM Do YYYY, h:mm:ss a')}
        />
        <Input
          containerStyle={styles.modalItemContainer}
          onChangeText={(e: string) => onChangeEventAddressText(e)}
          placeholder="Event Address"
          style={styles.modalInput}
          defaultValue={myEvent.address}
        />
        <Input
          keyboardType="number-pad"
          containerStyle={styles.modalItemContainer}
          onChangeText={(e: string) =>
            onChangeParticipantLimitText(parseInt(e))
          }
          placeholder="Participant Limit"
          style={styles.modalInput}
          defaultValue={myEvent.participantLimit.toString()}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          onPress={updateEvent}
          style={styles.updateButton}
          text="Update Your Super Event"
          textStyle={styles.updateButtonText}
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
      <ToastMessage
        duration={2000}
        message="Etkinlik güncellenemedi!"
        ref={eventUpdatedErrorToastMessage}
        type="error"
      />
    </SafeAreaView>
  );
};

export default UpdateScreen;
