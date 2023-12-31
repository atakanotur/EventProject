import React from 'react';
import {
  FlatList,
  RefreshControlProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {UserProfileDetail} from '../../../types';

interface ParticipantListProps {
  data: UserProfileDetail[];
  extraData?: UserProfileDetail[];
  renderItem: any;
  ListEmptyComponent?: any;
  ListHeaderComponent?: any;
  ListHeaderComponentStyle?: StyleProp<ViewStyle>;
  ListFooterComponent?: any;
  ListFooterComponentStyle?: StyleProp<ViewStyle>;
  refreshControl?: React.ReactElement<RefreshControlProps>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const UserList = (props: ParticipantListProps) => {
  const {
    data,
    renderItem,
    ListEmptyComponent,
    ListHeaderComponent,
    ListHeaderComponentStyle,
    ListFooterComponent,
    ListFooterComponentStyle,
    refreshControl,
    contentContainerStyle,
    style,
  } = props;
  return (
    <FlatList
      data={data}
      extraData={data}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListHeaderComponentStyle={ListHeaderComponentStyle}
      ListFooterComponent={ListFooterComponent}
      ListFooterComponentStyle={ListFooterComponentStyle}
      refreshControl={refreshControl}
      contentContainerStyle={[
        styles.contentContainerStyle,
        contentContainerStyle,
      ]}
      style={[styles.containerStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 15,
  },
  contentContainerStyle: {},
});

export default UserList;
