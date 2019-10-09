/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import PurchaseCard from '../../components/PurchaseCard';

import Colors from '~/constants/Colors';
export default function profile() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: Colors.second,
          height: 300,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}>
        <LottieView
          style={{
            alignSelf: 'center',
            width: 350,
            height: 200,
            marginTop: 30,
            marginBottom: 30,
          }}
          source={require('../../../assets/profile.json')}
          autoPlay
          loop
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            color: 'white',
          }}>
          Mateus Henrique
        </Text>
      </View>

      <Button
        activeOpacity={false}
        style={{
          alignSelf: 'center',
          width: 200,
          marginTop: 20,
          borderRadius: 15,
        }}
        mode="outlined"
        onPress={() => {}}>
        Trocar foto
      </Button>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 50,
          marginRight: 50,
          marginTop: 20,
        }}>
        <View style={{alignContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '700'}}>22</Text>
          <Text>Compras</Text>
        </View>
        <View style={{alignContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '700'}}>157</Text>
          <Text>R$ gastos</Text>
        </View>
        <View style={{alignContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '700'}}>478</Text>
          <Text>Produtos</Text>
        </View>
      </View>

      <View>
        <ScrollView style={{height: 300, marginTop: 20}}>
          <PurchaseCard />
          <PurchaseCard />
          <PurchaseCard />
          <PurchaseCard />
          <PurchaseCard />
          <PurchaseCard />
          <PurchaseCard />
          <PurchaseCard />
        </ScrollView>
      </View>
    </View>
  );
}
