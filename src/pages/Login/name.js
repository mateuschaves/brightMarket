/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

import Colors from '~/constants/Colors';

export default function Name(props) {
  const [name, setName] = useState('');
  const [lastname, setlastname] = useState('');
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
          Como você se chama ?
        </Text>
        <TextInput
          style={{
            marginBottom: 20,
            backgroundColor: 'white',
          }}
          keyboardType={'ascii-capable'}
          autoCapitalize={'none'}
          autoCorrect={false}
          autoFocus
          label="Nome"
          mode={'outlined'}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={{backgroundColor: 'white'}}
          keyboardType={'ascii-capable'}
          autoCapitalize={'none'}
          autoCorrect={false}
          label="Sobrenome"
          mode={'outlined'}
          value={lastname}
          onChangeText={text => setlastname(text)}
        />
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
          onPress={() => props.navigation.navigate('Planning')}>
          Continuar
        </Button>
      </View>
    </View>
  );
}
