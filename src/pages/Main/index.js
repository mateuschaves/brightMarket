import React, {Component} from 'react';
import {Alert, PermissionsAndroid, ActivityIndicator} from 'react-native';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowed: true,
    };
  }

  requestCameraPermission = async _ => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  componentDidMount() {
    this.requestCameraPermission();
  }

  render() {
    if (this.state.allowed) {
      return (
        <CameraKitCameraScreen
          actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
          onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
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
            Alert.alert(`Qr code found ${event.nativeEvent.codeStringValue} `);
            console.log(event.nativeEvent);
          }}
          hideControls={false}
          // offsetForScannerFrame = {10}
          // heightForScannerFrame = {300}
          colorForScannerFrame={'blue'}
        />
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}
