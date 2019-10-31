import React, {useState, useReducer} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '~/constants/Colors';

export default function PurchaseSummary(props) {
  const [visible, setVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        margin: 5,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: 'white',
            marginLeft: 15,
          }}>
          Total
        </Text>
        <Icon
          name={props.icon}
          color={'white'}
          size={20}
          style={{marginLeft: 40}}
        />
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

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
          Planejado
        </Text>

        <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
          R$ 201.50
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
          Restante
        </Text>

        <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
          R$ 43.63
        </Text>
      </View>

      <Button
        style={{
          margin: 30,
          width: 200,
          marginLeft: '5%',
          borderColor: 'white',
          alignSelf: 'center',
          borderWidth: 1
        }}
        activeOpacity={false}
        mode="outlined"
        onPress={() => setVisible(true)}>
        <Text style={{color: 'white', fontWeight: '700'}}>
          Finalizar
        </Text>
      </Button>
    </View>
  );
}
