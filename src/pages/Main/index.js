import React, {useState} from 'react';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

import {Alert} from 'react-native';

// Components
import Modal from '~/components/ProductModal';
import ProductNotRegisteredModal from '~/components/ProductNotRegisteredModal';

// Redux

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions

import {setScannedProduct} from '~/store/actions/scannedProductModal';
import {showProductNotRegisteredModal} from '~/store/actions/productNotRegisteredModal';
import {setBarCode} from '~/store/actions/barCode';

import Spinner from 'react-native-loading-spinner-overlay';

import api from '~/services/api';

function CameraScreen({
  setScannedProduct,
  modalVisible,
  navigation,
  showProductNotRegisteredModal,
  setBarCode,
}) {
  const [loading, setLoading] = useState(false);

  async function loadProductScanned(code) {
    setLoading(true);
    try {
      const {data} = await api.get(`/product/${code}`);
      setScannedProduct({
        id: data.id,
        name: data.name,
        brand: data.description,
        price: Number(data.price),
        category: 'Test',
        amount: 1,
      });
    } catch (error) {
      console.log(error);
      setBarCode(code);
      showProductNotRegisteredModal();
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Spinner
        visible={loading}
        textContent={'Carregando...'}
        textStyle={{
          color: '#FFF',
        }}
      />
      <Modal navigation={navigation} />
      <ProductNotRegisteredModal navigation={navigation} />
      <CameraKitCameraScreen
        flashImages={{
          on: require('../../../img/flashOn.png'),
          off: require('../../../img/flashOff.png'),
          auto: require('../../../img/flashAuto.png'),
        }}
        scanBarcode={true}
        laserColor={'blue'}
        surfaceColor={'black'}
        frameColor={'yellow'}
        onReadCode={(event) =>
          !modalVisible && loadProductScanned(event.nativeEvent.codeStringValue)
        }
        hideControls={false}
        colorForScannerFrame={'blue'}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setScannedProduct,
      showProductNotRegisteredModal,
      setBarCode,
    },
    dispatch,
  );

const mapStateToProps = ({scannedProductModal}) => ({
  modalVisible: scannedProductModal.modalVisible,
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);
