import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';

import ProductCard from '../../components/ProductCard';
import Colors from '../../constants/Colors';
import {isArray} from 'is-what';
import LottieView from 'lottie-react-native';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const itens = [
      {
        name: 'Sprok maçã',
        brand: 'Irmão do jorel',
        price: 4.5,
        category: 'Bebida',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
    ];
    // setProducts(itens);
  }, []);

  function renderProducts(itens) {
    console.log(itens);
    if (isArray(itens)) {
      if (!itens.length) return renderEmptyShop();
      return itens.map((item, index) => {
        if (index == 0) {
          return <ProductCard isSwipeable bounceOnMount={true} key={index} />;
        } else {
          return <ProductCard isSwipeable key={index} />;
        }
      });
    }
  }

  function renderEmptyShop() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            color: 'white',
          }}>
          Carrinho vazio =(
        </Text>
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '400',
            color: 'white',
          }}>
          Escaneie um código de barras para o produto aparecer aqui !
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
        backgroundColor: Colors.primary,
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor={Colors.second} />
      <View style={{marginTop: 20}}>
        {products.length ? renderProducts(products) : renderEmptyShop()}
      </View>
    </View>
  );
}
