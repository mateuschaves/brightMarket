/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {Button, TextInput} from 'react-native-paper';

export default function planning(props) {
  const [target, setTarget] = useState('0');
  return (
    <View style={{flex: 1}}>
      <LottieView
        style={{
          alignSelf: 'center',
          width: 350,
          height: 200,
          marginTop: 30,
        }}
        source={require('../../../assets/Moneys.json')}
        autoPlay
        loop
      />
      <TextInput
        style={{marginLeft: 20, marginRight: 20, marginTop: 50}}
        keyboardType={'decimal-pad'}
        autoCapitalize={'none'}
        autoCorrect={false}
        autoFocus
        label="Quanto planeja gastar ?"
        mode={'outlined'}
        value={target.toString()}
        onChangeText={number => setTarget(number)}
      />
      <Text
        style={{
          color: 'rgb(98,0,238)',
          fontSize: 14,
          marginLeft: 20,
        }}>
        Pode deixar zerado se você não tiver um limite
      </Text>

      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <Button
          activeOpacity={false}
          style={{width: '100%'}}
          mode="contained"
          onPress={() => props.navigation.navigate('BottomNavigatiom')}>
          Bora comprar !
        </Button>
      </View>
    </View>
  );
}
