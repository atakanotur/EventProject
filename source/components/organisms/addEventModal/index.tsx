import {View, StyleSheet, ModalProps, TouchableOpacity} from 'react-native';
import colors from '../../../theme/colors';
import {Button, Input, Text} from '../../atoms';
import {DropDown, Modal} from '../../molecules';
import Icon from 'react-native-vector-icons/Ionicons';

interface OwnAddEventModalProps {
  visible: boolean;
  transparent?: boolean;
  onChangeEventNameText?: any;
  onChangeEventAddressText?: any;
  onChangeParticipantLimitText?: any;
  closeIconOnPress: any;
  eventDateOnPress: any;
  eventDateValue: Date;
}

export type AddEventModalProps = OwnAddEventModalProps & ModalProps;

export const AddEventModal = (props: AddEventModalProps) => {
  const {
    onChangeEventAddressText,
    onChangeEventNameText,
    onChangeParticipantLimitText,
    visible,
    closeIconOnPress,
    eventDateOnPress,
    eventDateValue,
  } = props;

  console.log('eventDateValue', typeof eventDateValue.toDateString());

  return (
    <Modal
      visible={visible}
      containerStyle={styles.modalContainerStyle}
      modalStyle={styles.modalStyle}
      onBacksidePress={undefined}>
      <TouchableOpacity style={styles.closeIcon} onPress={closeIconOnPress}>
        <Icon name="close-circle-outline" size={25} />
      </TouchableOpacity>
      <DropDown
        data={[]}
        visible={false}
        onSelect={undefined}
        buttonTitle="Select Event Type"
        containerStyle={styles.modalItemContainer}
      />
      <Input
        containerStyle={styles.modalItemContainer}
        onChangeText={(e: string) => onChangeEventNameText(e)}
        placeholder="Event Name"
        style={styles.modalInput}
      />
      <Button
        onPress={eventDateOnPress}
        style={styles.modalItemContainer}
        text={eventDateValue.toDateString()}
      />
      <Input
        containerStyle={styles.modalItemContainer}
        onChangeText={(e: string) => onChangeEventAddressText(e)}
        placeholder="Event Address"
        style={styles.modalInput}
      />
      <Input
        containerStyle={styles.modalItemContainer}
        onChangeText={(e: string) => onChangeParticipantLimitText(e)}
        placeholder="Participant Limit"
        style={styles.modalInput}
      />
      <Button
        onPress={eventDateOnPress}
        style={styles.createButton}
        text="Create Your Super Event"
        textStyle={styles.createButtonText}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    justifyContent: 'center',
  },
  modalStyle: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.red,
    borderRadius: 15,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 24,
  },
  modalItemContainer: {
    padding: 5,
    margin: 10,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },
  modalInput: {
    fontSize: 17,
  },
  createButton: {
    height: 50,
    margin: 10,
    backgroundColor: colors.red,
    borderRadius: 10,
  },
  createButtonText: {
    color: colors.white,
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
