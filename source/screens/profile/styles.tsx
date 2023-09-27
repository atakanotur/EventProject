import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  bottom: {
    flex: 2,
    backgroundColor: colors.white,
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: colors.red
  },
  modalCentered: {},
  modalContainer: {
   
  },
});
