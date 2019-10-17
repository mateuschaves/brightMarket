import React, {useState} from 'react';
import {CameraKitCameraScreen} from 'react-native-camera-kit';
import Modal from '~/components/ProductModal';

export default function CameraScreen(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Modal show={show} />
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
        onReadCode={event => {
          if (!show) setShow(true);
        }}
        hideControls={false}
        // offsetForScannerFrame = {10}
        // heightForScannerFrame = {300}
        colorForScannerFrame={'blue'}
      />
    </>
  );
}
