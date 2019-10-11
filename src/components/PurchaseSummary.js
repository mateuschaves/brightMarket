import React from 'react';
import {View, Text} from 'react-native';
import Colors from '~/constants/Colors';

export default function components() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 18,
          color: 'white',
          marginLeft: 15,
        }}>
        Total
      </Text>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 18,
          color: 'white',
          marginRight: 15,
        }}>
        R$ 157.87
      </Text>
    </View>
  );
}
