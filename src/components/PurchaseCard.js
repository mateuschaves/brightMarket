/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Vibration} from 'react-native';
import Swipeable from 'react-native-swipeable-row';

const rightButtons = [<></>];
export default function ProductCard() {
  return (
    <Swipeable
      onRightActionRelease={_ => Vibration.vibrate(100)}
      rightButtonWidth={110}
      rightButtons={rightButtons}>
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
            Unicompras
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                color: 'grey',
              }}>
              Caruaru
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
              12 dias atrás
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text
              style={{
                marginLeft: 170,
                marginTop: 5,
                color: 'green',
                fontWeight: '700',
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
