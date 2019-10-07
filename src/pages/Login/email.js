/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

import Colors from '~/constants/Colors';

export default function Login(props) {
  const [email, setEmail] = useState('');
  return (
    <View
      style={{
        marginTop: 50,
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
      <View style={{margin: 20, marginTop: 100}}>
        <Text
          style={{
            marginBottom: 10,
            color: Colors.primary,
            fontSize: 20,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Informe o seu email para começar !
        </Text>
        <TextInput
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          autoCorrect={false}
          autoFocus
          label="Email"
          mode={'outlined'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text
          style={{
            color: Colors.primary,
            fontSize: 14,
          }}>
          Enviaremos informações das suas compras para esse email
        </Text>
      </View>

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
          onPress={() => props.navigation.navigate('Password')}>
          Continuar
        </Button>
      </View>
    </View>
  );
}
