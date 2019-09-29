/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

export default function Password(props) {
  const [password, setPassword] = useState('');
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
            color: 'rgb(98,0,238)',
            fontSize: 18,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Agora escolha uma senha bem segura
        </Text>
        <TextInput
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
            color: 'rgb(98,0,238)',
            fontSize: 14,
          }}>
          Não conta ela pra ninguém, beleza ?
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
          onPress={() => props.navigation.navigate('BottomNavigatiom')}>
          Continuar
        </Button>
      </View>
    </View>
  );
}
