import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Text} from '../../atoms';
import {UserProfileDetail} from '../../../types';

interface UserListRenderItemProps {
  item: UserProfileDetail;
  index: number;
  renderItemContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  disabledOnPress?: boolean;
  selectUser?: (item: UserProfileDetail, index: number) => void;
}

const UserListRenderItem = (props: UserListRenderItemProps) => {
  const {
    item,
    index,
    renderItemContainerStyle,
    titleStyle,
    disabledOnPress,
    selectUser,
  } = props;
  const onPressHandler = () => {
    if (selectUser) {
      selectUser(item, index);
    }
  };

  return (
    <TouchableOpacity disabled={disabledOnPress} onPress={onPressHandler}>
      <View style={[styles.container, renderItemContainerStyle]}>
        <Text
          text={item.firstName + ' ' + item.lastName}
          style={[styles.title, titleStyle]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    margin: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
  },
});

export default UserListRenderItem;
