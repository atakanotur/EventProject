import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ViewStyle,
} from 'react-native';
import {Text} from '../../atoms';

interface DropDownProps {
  data: Array<any>;
  visible: boolean;
  onSelect: any;
  buttonTitle: string;
  containerStyle?: ViewStyle;
}

const DropDown = (props: DropDownProps) => {
  const {buttonTitle, data, onSelect, visible, containerStyle} = props;
  const [open, setOpen] = useState(false);
  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity>
        <Text text={item.name} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={() => setOpen(visible)}>
        <Text text={buttonTitle} />
      </TouchableOpacity>
      {open && (
        <ScrollView>
          <FlatList data={data} renderItem={item => renderItem(item)} />
        </ScrollView>
      )}
    </View>
  );
};

export default DropDown;
