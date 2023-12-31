import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Button, Text} from '../..';
import colors from '../../../theme/colors';

interface DeleteConfirmationModalProps {
  visible: boolean;
  header?: string;
  message?: string;
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteConfirmationModal = (props: DeleteConfirmationModalProps) => {
  const {visible, header, message, onCancel, onDelete} = props;
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.texts}>
          <Text text={header} style={styles.headerText} />
          <Text text={message} />
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={onDelete}
            style={[styles.button, styles.deleteButton]}
            text="Delete"
            textStyle={styles.deleteButtonText}
          />
          <Button
            onPress={onCancel}
            style={[styles.button, styles.cancelButton]}
            text="Cancel"
            textStyle={styles.cancelButtonText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.50)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: colors.white,
    height: 200,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.red,
    borderRadius: 10,
  },
  texts: {
    flex: 3,
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
  },
  deleteButton: {
    borderColor: colors.green,
  },
  deleteButtonText: {
    color: colors.green,
  },
  cancelButton: {
    borderColor: colors.red,
  },
  cancelButtonText: {
    color: colors.red,
  },
});

export default DeleteConfirmationModal;
