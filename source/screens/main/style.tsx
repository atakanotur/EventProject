import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
  },
  banner: {
    height: 40,
    flexDirection: 'row'
  },
  bannerLeftIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bannerMain: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bannerText: {
    fontSize: 25
  },
  bannerRightIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  //eventList
  eventListContainer: {
    height: 120,
    marginTop: 10,
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventListHeader: {
    flexDirection: 'row',
    flex: 2,
  },
  eventListName: {
    flex: 5,
  },
  eventListEventType: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventListBody: {
    flexDirection: 'row',
    flex: 5,
  },
  eventListParticipants: {
    flex: 1,
  },
  eventListDate: {
    flex: 1,
  },
  eventListLocation: {
    flex: 1,
  },
  eventListBodyItemIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventListBodyItemInformation: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
});
