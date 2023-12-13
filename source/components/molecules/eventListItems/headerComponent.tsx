import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Input, Text} from '../../atoms';
import colors from '../../../theme/colors';
import {MyEvent, MyEventType} from '../../../types';
import {EventTypeList} from '../../organisms';
import EventTypeListRenderItem from '../eventTypeListItems/renderItem';

interface OwnProps {
  myEventTypes: MyEventType[];
  onChangeText: any;
  selectEventType: (item: MyEvent, index: number) => void;
  selectedEventType: number;
}

const EventListHeaderComponent = (props: OwnProps) => {
  const {myEventTypes, onChangeText, selectEventType, selectedEventType} =
    props;
  return (
    <View style={styles.container}>
      <EventTypeList
        data={myEventTypes}
        extraData={myEventTypes}
        horizontal={true}
        renderItem={({item, index}: any) => {
          return (
            <EventTypeListRenderItem
              item={item}
              index={index}
              selectEventType={() => selectEventType(item, index)}
              selectedEventType={selectedEventType}
              selectedTypeColor={colors.purple}
              selectedTypeTitleColor={colors.white}
            />
          );
        }}
      />
      <Input
        containerStyle={styles.searchInputContainer}
        style={styles.searchInput}
        onChangeText={(e: string) => onChangeText(e)}
        iconName="search-outline"
        iconColor={colors.white}
        iconSize={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  typeList: {
    alignItems: 'center',
  },
  types: {
    flex: 1,
  },
  type: {
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 5,
    padding: 5,
    height: 30,
  },
  search: {
    flex: 1,
    width: '90%',
  },
  renderItemContainer: {},
  searchInputContainer: {},
  searchInput: {
    borderBottomWidth: 2,
    borderColor: colors.purple,
    marginLeft: 15,
    fontSize: 17,
  },
});

export default EventListHeaderComponent;
