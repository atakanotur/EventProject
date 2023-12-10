import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingRight: 5,
    paddingLeft: 5,
    justifyContent: 'space-between',
  },
  eventTypeListContainer: {
    margin: 15,
    height: 35,
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
  bottom:{

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
  cancelButton: {
    height: 50,
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.red
  },
  cancelButtonText: {
    color: colors.red,
  },
});
