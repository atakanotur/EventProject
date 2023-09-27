import React from 'react';
import {View} from 'react-native';
import {Text} from '../../atoms';

const EventTypesRenderItem = (item: any) => {
  return (
    <View>
      <View>
        <Text text={item.item.name} />
      </View>
    </View>
  );
};

export default EventTypesRenderItem;
