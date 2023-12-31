import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  eventTypeListContainer: {
    height: 35,
  },
  modalItemContainer: {
    padding: 5,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalInput: {
    fontSize: 17,
  },
  mid: {},
  bottom: {},
  userList: {
    marginBottom: 10,
  },
  userListHeaderContainer: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 5,
  },
  userListHeaderText: {
    color: colors.red,
    fontSize: 17,
  },
  updateButton: {
    height: 50,
    backgroundColor: colors.red,
    borderRadius: 10,
  },
  updateButtonText: {
    color: colors.white,
  },
  cancelButton: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.red,
  },
  cancelButtonText: {
    color: colors.red,
  },
});
