/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableHighlight, Vibration} from 'react-native';
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/MaterialIcons';

const rightButtons = [
  <TouchableHighlight
    style={{
      marginTop: 5,
      backgroundColor: '#e74c3c',
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 10,
    }}>
    <>
      <Text
        style={{
          flexDirection: 'column',
          color: 'white',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: 17,
          fontWeight: '500',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        Remover
      </Text>
      <Icon
        style={{textAlign: 'center', alignSelf: 'center'}}
        name="delete"
        size={30}
        color="white"
      />
    </>
  </TouchableHighlight>,
];
export default function ProductCard() {
  return (
    <Swipeable rightButtonWidth={110} rightButtons={rightButtons}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          margin: 15,
          marginBottom: 5,
          marginTop: 5,
          borderRadius: 10,
          borderColor: '#0000',
          backgroundColor: '#FDFEFE',
          height: 100,
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 5,
          },
          shadowOpacity: 0.7,
          shadowRadius: 45,
          elevation: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.3,
            borderColor: 'grey',
            borderRightWidth: 0.3,
          }}>
          <Image
            style={{width: 50, height: 50, marginLeft: 15, borderRadius: 90}}
            source={{uri: 'https://picsum.photos/seed/picsum/200'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: 'flex-start',
          }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,
              marginLeft: 10,
              fontWeight: '500',
            }}>
            Biscoito treloso sabor chocolate
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                color: 'grey',
              }}>
              Treloso
            </Text>
            <Text
              style={{
                marginLeft: 7,
                marginRight: 7,
                fontSize: 14,
                color: 'grey',
              }}>
              -
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              Lanche
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row-reverse'}}>
            <Text
              style={{
                color: 'green',
                fontWeight: '700',
                marginTop: 15,
                marginRight: 15,
                fontSize: 17,
              }}>
              R$ 1.30
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}
