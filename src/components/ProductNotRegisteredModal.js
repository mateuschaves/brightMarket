/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Modal, Portal, Button} from 'react-native-paper';

import Colors from '~/constants/Colors';

import NavigationService from '~/navigation/NavigationService';

// Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {
  showProductNotRegisteredModal,
  hideProductNotRegisteredModal,
} from '~/store/actions/productNotRegisteredModal';

function productNotRegisteredModal({
  hideProductNotRegisteredModal,
  productNotRegisteredModalVisible,
  navigation,
}) {
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
        visible={productNotRegisteredModalVisible}
        onDismiss={(_) => hideProductNotRegisteredModal()}>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.primary,
            fontWeight: '700',
            fontSize: 18,
            marginBottom: 30,
          }}>
          Esse produto ainda não foi registrado =(
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.primary,
            fontWeight: '500',
            fontSize: 15,
            marginBottom: 30,
          }}>
          Deseja registrar ?
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
            onPress={() => {
              hideProductNotRegisteredModal();
              NavigationService.navigate('RegisterProduct');
            }}>
            Yes !
          </Button>

          <Button
            activeOpacity={false}
            style={{width: 140}}
            mode="outlined"
            onPress={() => hideProductNotRegisteredModal()}>
            Agora não
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}

const mapStateToProps = ({productNotRegisteredModal}) => ({
  productNotRegisteredModalVisible:
    productNotRegisteredModal.productNotRegisteredModalVisible,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {hideProductNotRegisteredModal, showProductNotRegisteredModal},
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(productNotRegisteredModal);
