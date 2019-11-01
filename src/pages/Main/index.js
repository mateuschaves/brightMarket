import React from 'react';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

// Components
import Modal from '~/components/ProductModal';

// Redux

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions

import {setScannedProduct} from '~/store/actions/scannedProductModal';

function CameraScreen({setScannedProduct, modalVisible}) {
  return (
    <>
      <Modal />
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
        onReadCode={_ =>
          !modalVisible &&
          setScannedProduct({
            id: 55,
            name: 'Sprok maçã',
            brand: 'Irmão do jorel',
            price: 4.5,
            category: 'Bebida',
            amount: 1,
          })
        }
        hideControls={false}
        colorForScannerFrame={'blue'}
      />
    </>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({setScannedProduct}, dispatch);

const mapStateToProps = ({scannedProductModal}) => ({
  modalVisible: scannedProductModal.modalVisible,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CameraScreen);
