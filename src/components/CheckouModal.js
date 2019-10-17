/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Modal, Portal, Button} from 'react-native-paper';

import Colors from '~/constants/Colors';

export default function CheckoutModal({show}) {
  const [visible, setVisible] = useState(show);
  useEffect(() => {
    setVisible(show);
  }, []);
  return (
    <Portal>
      <Modal
        contentContainerStyle={{
          backgroundColor: 'white',
          height: 250,
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
            fontSize: 20,
            marginBottom: 30,
          }}>
          Finalizar compra
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.second,
            fontSize: 15,
            marginBottom: 30,
          }}>
          Certeza que não tá esquecendo de nada ?
        </Text>
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
            Claro
          </Button>

          <Button
            activeOpacity={false}
            style={{width: 140}}
            mode="outlined"
            onPress={() => setVisible(false)}>
            Não sei
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}
