/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text, Animated, RefreshControl} from 'react-native';

import ProductCard from '../../components/ProductCard';
import Colors from '../../constants/Colors';
import {isArray} from 'is-what';
import LottieView from 'lottie-react-native';
import {Placeholder, PlaceholderLine, Shine} from 'rn-placeholder';
import {ScrollView} from 'react-native-gesture-handler';

// Componentes

import ProductSearch from '~/components/ProductSearch';
import PurchaseSummary from '~/components/PurchaseSummary';
import CheckouModal from '~/components/CheckouModal';

// Redux

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions

import {
  decrementAmountProduct,
  incrementAmountProduct,
  newProduct,
  removeProduct,
  setTargetPrice,
} from '~/store/actions/shopCart';

const Loader = () => (
  <>
    <Placeholder Animation={Shine} style={{left: 20, top: 30}}>
      <View style={{flex: 1, flexDirection: 'row', width: 60}}>
        <PlaceholderLine
          width={85}
          height={50}
          style={{borderRadius: 90, margin: 10, backgroundColor: 'lightgrey'}}
        />
        <PlaceholderLine
          width={400}
          style={{marginTop: 10, backgroundColor: 'lightgrey'}}
        />
        <PlaceholderLine
          width={150}
          style={{marginTop: 35, right: 240, backgroundColor: 'lightgrey'}}
        />
        <PlaceholderLine
          width={150}
          style={{marginTop: 35, right: 195, backgroundColor: 'lightgrey'}}
        />
      </View>
    </Placeholder>
  </>
);

function Products({
  setTargetPrice,
  price,
  newProduct,
  removeProduct,
  decrementAmountProduct,
  incrementAmountProduct,
  products,
  targetPrice,
}) {
  const [loading, setLoading] = useState(true);
  const [heightSummary, setHeightSummary] = useState(new Animated.Value(40));
  const [animationPosition, setAnimationPosition] = useState(0);
  const [visible, setVisible] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  function renderProducts() {
    if (isArray(products)) {
      if (!products.length) return renderEmptyShop();
      return products.map(({name, brand, price, category}, index) => {
        if (index == 0) {
          return (
            <ProductCard
              name={name}
              brand={brand}
              price={price}
              category={category}
              isSwipeable
              bounceOnMount={true}
              key={index}
            />
          );
        } else {
          return (
            <ProductCard
              name={name}
              brand={brand}
              price={price}
              category={category}
              isSwipeable
              key={index}
            />
          );
        }
      });
    }
  }

  function renderEmptyShop() {
    return (
      <View style={{marginTop: 150}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: '700',
            color: 'white',
          }}>
          Carrinho vazio =(
        </Text>
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            fontSize: 17,
            fontWeight: '400',
            color: 'white',
          }}>
          Escaneie um código de barras e o seu produto irá aparecer aqui!
        </Text>
        <LottieView
          style={{
            alignSelf: 'center',
            width: 350,
            height: 200,
          }}
          source={require('../../../assets/sheepBuy.json')}
          autoPlay
          loop
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          !products.length && !loading ? Colors.primary : 'rgb(246, 246, 246)',
      }}>
      <CheckouModal show={visible} />
      {products.length ? <ProductSearch /> : <></>}
      {loading ? (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              titleColor={Colors.primary}
            />
          }
          style={{marginTop: 15, marginBottom: 0}}>
          {products.length ? renderProducts() : renderEmptyShop()}
        </ScrollView>
      )}
      <View
        onTouchStart={() => {
          setAnimationPosition(animationPosition ? 0 : 1);
          Animated.spring(heightSummary, {
            toValue: animationPosition ? 40 : 200,
            duration: 600,
          }).start();
        }}>
        <Animated.View
          style={{
            backgroundColor: Colors.primary,
            flexDirection: 'row',
            alignSelf: 'flex-end',
            height: heightSummary,
            borderTopLeftRadius: animationPosition ? 10 : 0,
            borderTopRightRadius: animationPosition ? 10 : 0,
            elevation: 10,
            borderColor: 'black',
            borderBottomWidth: 0.5,
          }}>
          {products.length && !loading ? (
            <PurchaseSummary
              price={price}
              targetPrice={targetPrice}
              icon={animationPosition ? 'ios-arrow-down' : 'ios-arrow-up'}
            />
          ) : (
            <></>
          )}
        </Animated.View>
      </View>

      <StatusBar backgroundColor={Colors.primary} />
    </View>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeProduct,
      newProduct,
      setTargetPrice,
      incrementAmountProduct,
      decrementAmountProduct,
    },
    dispatch,
  );

const mapStateToProps = ({shopCart}) => ({
  products: shopCart.products,
  price: shopCart.price,
  targetPrice: shopCart.targetPrice,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
