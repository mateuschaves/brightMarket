/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, PermissionsAndroid, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import Colors from '~/constants/Colors';

import AsyncStorage from '@react-native-community/async-storage';

export default function cameraPermission(props) {
  async function checkCameraPermission() {
    const isAlreadyGranted = JSON.parse(
      await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA),
    );
    if (isAlreadyGranted) props.navigation.navigate('Main');
    else return false;
  }
  useEffect(() => {
    checkCameraPermission();
  }, []);
  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Bright Market precisa acessar sua câmera',
          message:
            'Bright Market precisa acessar sua câmera' +
            'E então você pode escanear os produtos do mercado =).',
          buttonNeutral: 'Perguntar depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Sim !',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Não conseguimos acesso a sua câmera',
          'Permita o acesso a câmera para poder continuar',
        );
        await AsyncStorage.setItem(
          '@brightMarket@cameraPermission',
          JSON.stringify(false),
        );
      } else {
        props.navigation.navigate('Main');

        await AsyncStorage.setItem(
          '@brightMarket@cameraPermission',
          JSON.stringify(true),
        );
      }
    } catch (err) {
      console.log(err);
      Alert.alert('Não conseguimos acesso a sua câmera', `${err}`);
    }
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Text
        style={{
          marginTop: 30,
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 19,
          color: Colors.primary,
        }}>
        Precisamos da sua permissão para acessar a câmera
      </Text>
      <LottieView
        style={{
          alignSelf: 'center',
          width: 350,
          height: 200,
        }}
        source={require('../../../assets/barcodeScanner.json')}
        autoPlay
        loop
      />
      <Text
        style={{
          textAlign: 'center',
          color: 'grey',
          fontSize: 15,
          marginTop: 20,
        }}>
        Fica tranquilo, só vamos usa-la para escanear os produtos
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 60,
        }}>
        <Button
          activeOpacity={false}
          style={{width: '40%'}}
          mode="outlined"
          onPress={() => {}}>
          Melhor não
        </Button>
        <Button
          activeOpacity={false}
          style={{width: '40%'}}
          mode="contained"
          onPress={() => requestCameraPermission()}>
          Claro =)
        </Button>
      </View>
    </View>
  );
}
