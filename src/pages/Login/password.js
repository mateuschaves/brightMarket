/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

import Colors from '~/constants/Colors';
export default function Password(props) {
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View style={{margin: 20, marginTop: 150}}>
        <Text
          style={{
            marginBottom: 10,
            color: Colors.primary,
            fontSize: 18,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Agora escolha uma senha bem segura
        </Text>
        <TextInput
          style={{backgroundColor: 'white'}}
          keyboardType={'default'}
          secureTextEntry
          autoCapitalize={'none'}
          autoCorrect={false}
          autoFocus
          label="Senha"
          mode={'outlined'}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text
          style={{
            color: Colors.primary,
            fontSize: 14,
          }}>
          Não conta ela pra ninguém, beleza ?
        </Text>

        <Text
          style={{
            marginTop: 30,
            color: 'grey',
            fontSize: 12,
          }}>
          Esqueceu sua senha ?
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
          onPress={() => props.navigation.navigate('Name')}>
          Continuar
        </Button>
      </View>
    </View>
  );
}
