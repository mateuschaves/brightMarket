/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Modal, Portal, Button} from 'react-native-paper';

import ProductCard from '~/components/ProductCard';
import Colors from '~/constants/Colors';

export default function ProductModal({show}) {
  const [visible, setVisible] = useState(show);
  useEffect(() => {
    setVisible(show);
  }, [show]);
  return (
    <Portal>
      <Modal
        contentContainerStyle={{
          backgroundColor: 'white',
          height: 300,
          width: '95%',
          marginLeft: '2.5%',
          marginRight: '2.5%',
          zIndex: 5,
          borderRadius: 10,
        }}
        visible={visible}
        onDismiss={_ => setVisible(false)}>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.primary,
            fontWeight: '700',
            fontSize: 18,
            marginBottom: 30,
          }}>
          Produto encontrado !
        </Text>
        <ProductCard
          name={'Miojo'}
          brand={'treloso'}
          category={'Lanche'}
          price={'1.40'}
          isSwipeable={false}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            paddingLeft: 15,
            paddingRight: 15,
          }}>
          <Button
            activeOpacity={false}
            style={{width: 140}}
            mode="contained"
            onPress={() => setVisible(false)}>
            Adicionar
          </Button>

          <Button
            activeOpacity={false}
            style={{width: 140}}
            mode="outlined"
            onPress={() => setVisible(false)}>
            Cancelar
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}
