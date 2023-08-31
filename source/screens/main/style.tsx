import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,

  },
  //eventList
  eventListContainer: {
    height: 150,
    backgroundColor: 'red',
    borderWidth: 1,
    margin: 5,
  },
  eventListHeader: {
    borderWidth: 1,
    flexDirection: 'row',
    flex: 2
  },
  eventListName: {
    borderWidth: 1,
    flex: 5
  },
  eventListEventType: {
    borderWidth: 1,
    flex: 1
  },
  eventListBody: {
    borderWidth: 1,
    flexDirection: 'row',
    flex: 5
  },
  eventListParticipants: {
    borderWidth: 1,
    flex: 1,
  },
  eventListDate: {
    borderWidth: 1,
    flex: 1
  },
  eventListLocation: {
    borderWidth: 1,
    flex: 1
  },
  eventListBodyItemIcon: {
    borderWidth: 1,
    flex: 1
  },
  eventListBodyItemInformation: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row'
  },
});
