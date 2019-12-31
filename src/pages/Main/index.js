import React, { useState } from 'react';
import { CameraKitCameraScreen } from 'react-native-camera-kit';

// Components
import Modal from '~/components/ProductModal';
import ProductNotRegisteredModal from '~/components/ProductNotRegisteredModal';

// Redux

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions

import { setScannedProduct } from '~/store/actions/scannedProductModal';
import { showProductNotRegisteredModal } from '~/store/actions/productNotRegisteredModal';


import Spinner from 'react-native-loading-spinner-overlay';


import Reactotron from 'reactotron-react-native'

import api from '~/services/api'

function CameraScreen({
  setScannedProduct,
  modalVisible,
  navigation,
  showProductNotRegisteredModal
}) {

  const [loading, setLoading] = useState(false);

  async function loadProductScanned(code) {
    setLoading(true);
    try {
      const { data } = await api.get(`/product/${code}`);
      if (data.productRegistered) {
        setScannedProduct({
          id: 1,
          name: 'Sprok maçã',
          brand: 'Irmão do jorel',
          price: 4.5,
          category: 'Bebida',
          amount: 1,
        });
      } else {
        showProductNotRegisteredModal();
      }
    } catch (error) {

    }
    setLoading(false);
  }


  return (
    <>
      <Spinner
        visible={loading}
        textContent={'Carregando...'}
        textStyle={{
          color: '#FFF'
        }}
      />
      <Modal navigation={navigation} />
      <ProductNotRegisteredModal />
      <CameraKitCameraScreen
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
        onReadCode={event => !modalVisible && loadProductScanned(event.nativeEvent.codeStringValue)}
        hideControls={false}
        colorForScannerFrame={'blue'}
      />
    </>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setScannedProduct,
    showProductNotRegisteredModal
  }, dispatch);

const mapStateToProps = ({ scannedProductModal }) => ({
  modalVisible: scannedProductModal.modalVisible,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CameraScreen);
