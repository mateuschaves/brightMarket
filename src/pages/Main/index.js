import React, {useState} from 'react';
import {CameraKitCameraScreen} from 'react-native-camera-kit';
// import Modal from '~/components/ProductModal';
import {Portal, Modal, Text, View} from 'react-native';

import {Button} from 'react-native-paper';

import Colors from '~/constants/Colors';
import ProductCard from '~/components/ProductCard';

export default function CameraScreen(props) {
  const [show, setShow] = useState(false);

  return (
    <>
    {show && <Portal>
      <Modal
        contentContainerStyle={{
          backgroundColor: 'white',
          height: 300,
          marginLeft: '2.5%',
          marginRight: '2.5%',
          zIndex: 5,
          borderRadius: 10,
        }}
        visible={show}
        onDismiss={_ => setShow(false)}>
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
            onPress={() => setShow(false)}>
            Adicionar
          </Button>

          <Button
            activeOpacity={false}
            style={{width: 140}}
            mode="outlined"
            onPress={() => setShow(false)}>
            Cancelar
          </Button>
        </View>
      </Modal>
      </Portal>}
      {!show && <CameraKitCameraScreen
        flashImages={{
          on: require('../../../img/flashOn.png'),
          off: require('../../../img/flashOff.png'),
          auto: require('../../../img/flashAuto.png'),
        }}
        showFrame={true}
        scanBarcode={true}
        laserColor={'blue'}
        surfaceColor={'black'}
        frameColor={'yellow'}
        onReadCode={event => {
          console.log(event);
          if (!show) setShow(true);
        }}
        hideControls={false}
        // offsetForScannerFrame = {10}
        // heightForScannerFrame = {300}
        colorForScannerFrame={'blue'}
      />}

      <>
      </>
    </>
  );
}
