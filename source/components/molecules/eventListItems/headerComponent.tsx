import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Input, Text} from '../../atoms';
import colors from '../../../theme/colors';
import {MyEventType} from '../../../types';

interface OwnProps {
  myEventTypes: MyEventType[];
  onChangeText: any;
  selectEventType: any;
  selectedEventType: number;
}

const EventListHeaderComponent = (props: OwnProps) => {
  const {myEventTypes, onChangeText, selectEventType, selectedEventType} =
    props;
  const renderItem = ({item, index}: any) => {
    const id = item.id;
    return (
      <TouchableOpacity
        style={[
          styles.type,
          selectedEventType === index
            ? {backgroundColor: colors.purple, borderColor: colors.purple}
            : null,
        ]}
        onPress={() => selectEventType(id)}>
        <Text text={item.name} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.types}>
        <FlatList
          data={myEventTypes}
          extraData={myEventTypes}
          renderItem={renderItem}
          horizontal={true}
          contentContainerStyle={styles.typeList}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.search}>
        <Input
          containerStyle={styles.searchInputContainer}
          style={styles.searchInput}
          onChangeText={(e: string) => onChangeText(e)}
          iconName="search-outline"
          iconColor={colors.white}
          iconSize={30}
        />
      </View>
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
