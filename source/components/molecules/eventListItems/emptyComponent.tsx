import {View} from 'react-native';
import {Text} from '../../atoms';

const EventListEmptyComponent = () => {
  return (
    <View>
      <Text text="Any event doesn't exist!" />
    </View>
  );
};

export default EventListEmptyComponent;
