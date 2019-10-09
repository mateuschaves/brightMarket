/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

import {Button} from 'react-native-paper';

import LottieView from 'lottie-react-native';
import Colors from '~/constants/Colors';

export default function home(props) {
  return (
    <View
      style={{justifyContent: 'center', backgroundColor: '#FFFFFF', flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 20,
          color: Colors.primary,
          marginTop: 70,
        }}>
        Organize suas compras
      </Text>
      <LottieView
        style={{
          alignSelf: 'center',
          width: 350,
          height: 200,
          marginTop: 30,
        }}
        source={require('../../../assets/taskMan.json')}
        autoPlay
        loop
      />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 15,
          color: Colors.primary,
          marginTop: 100,
        }}>
        Defina quanto você quer gastar e acompanhe com facilidade o preço da sua
        compra
      </Text>

      <View
        style={{
          marginTop: 70,
          flexDirection: 'row',
        }}>
        <Button
          style={{
            width: '40%',
            marginLeft: '5%',
            borderColor: Colors.primary,
          }}
          activeOpacity={false}
          mode="outlined"
          onPress={() => props.navigation.navigate('Email')}>
          <Text style={{color: Colors.primary, fontWeight: '700'}}>Entrar</Text>
        </Button>

        <Button
          style={{
            width: '40%',
            marginLeft: '10%',
            marginRight: '5%',
            borderColor: Colors.primary,
          }}
          activeOpacity={false}
          mode="outlined"
          onPress={() => props.navigation.navigate('Email')}>
          <Text style={{color: Colors.primary, fontWeight: '700'}}>
            Registrar
          </Text>
        </Button>
      </View>
    </View>
  );
}
