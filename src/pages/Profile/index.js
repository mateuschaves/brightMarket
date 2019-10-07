/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import PurchaseCard from '../../components/PurchaseCard';

export default function profile() {
  return (
    <View style={{backgroundColor: 'white'}}>
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
        }}>
        Mateus Henrique
      </Text>

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
  );
}
