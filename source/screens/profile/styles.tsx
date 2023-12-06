import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  options: {
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  top: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topImageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImageBackgroundImage: {},
  addButton: {
    height: 70,
    width: 70,
    borderWidth: 3,
    borderRadius: 35,
    borderColor: colors.red,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.7,
    elevation: 7,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 40,
    color: colors.red,
    fontWeight: '500',
  },
  bottom: {
    flex: 3,
    backgroundColor: colors.white,
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
  },
  bottomTop: {
    borderWidth: 2,
    borderColor: colors.red,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    borderRadius: 10,
  },
  myEventCategoryButtonText: {
    color: colors.white,
  },
  modalCentered: {},
  modalContainer: {},
});
