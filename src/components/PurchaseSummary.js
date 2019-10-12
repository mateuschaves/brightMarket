import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '~/constants/Colors';

export default function PurchaseSummary(props) {
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
            color: Colors.primary,
            marginLeft: 15,
          }}>
          Total
        </Text>
        <Icon
          name={props.icon}
          color={Colors.primary}
          size={20}
          style={{marginLeft: 40}}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: Colors.primary,
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
        <Text style={{color: Colors.primary, fontSize: 18, fontWeight: '600'}}>
          Planejado
        </Text>

        <Text style={{color: Colors.primary, fontSize: 18, fontWeight: '600'}}>
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
        <Text style={{color: Colors.primary, fontSize: 18, fontWeight: '600'}}>
          Restante
        </Text>

        <Text style={{color: Colors.primary, fontSize: 18, fontWeight: '600'}}>
          R$ 43.63
        </Text>
      </View>

      <Button
        style={{
          margin: 30,
          width: 200,
          marginLeft: '5%',
          borderColor: Colors.primary,
          alignSelf: 'center',
        }}
        activeOpacity={false}
        mode="outlined"
        onPress={() => {}}>
        <Text style={{color: Colors.primary, fontWeight: '700'}}>
          Finalizar
        </Text>
      </Button>
    </View>
  );
}
