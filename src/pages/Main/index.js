import React, {useState} from 'react';
import {Alert} from 'react-native';
import {CameraKitCameraScreen} from 'react-native-camera-kit';
import Modal from '~/components/Modal';

export default function CameraScreen() {
  const [show, setShow] = useState(false);

  function onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  return (
    <>
      <Modal show={show} />
      <CameraKitCameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        onBottomButtonPressed={event => onBottomButtonPressed(event)}
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
