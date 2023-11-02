import {
  View,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Text} from '../../atoms';
import colors from '../../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomCheckBoxProps {
  style?: StyleProp<ViewStyle>;
  selected: boolean;
  onSelected: () => void;
}

const CustomCheckBox = (props: CustomCheckBoxProps) => {
  let {selected, onSelected} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onSelected}>
      {selected && (
        <Icon name="checkmark-outline" size={20} color={colors.red} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.red,
    height: 25,
    width: 25,
  },
});

export default CustomCheckBox;
