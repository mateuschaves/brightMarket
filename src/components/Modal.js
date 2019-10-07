/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {Modal, Portal, Text, Button} from 'react-native-paper';

import ProductCard from '~/components/ProductCard';

export default function modal() {
  const [visible, setVisible] = useState(true);
  return (
    <Portal>
      <Modal
        contentContainerStyle={{
          backgroundColor: 'white',
          height: 200,
          zIndex: 5,
        }}
        visible={visible}
        onDismiss={_ => setVisible(false)}>
        <Text style={{alignText: 'center'}}>Produto escaneado !</Text>
        <ProductCard isSwipeable={false} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            paddingLeft: 30,
            paddingRight: 30,
          }}>
          <Button
            activeOpacity={false}
            style={{width: 140}}
            mode="contained"
            onPress={() => {}}>
            Adicionar
          </Button>

          <Button
            activeOpacity={false}
            style={{width: 140}}
            mode="outlined"
            onPress={() => {}}>
            Cancelar
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}
