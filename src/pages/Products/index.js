import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text, Animated} from 'react-native';

import ProductCard from '../../components/ProductCard';
import Colors from '../../constants/Colors';
import {isArray} from 'is-what';
import LottieView from 'lottie-react-native';

import {Placeholder, PlaceholderLine, Shine} from 'rn-placeholder';

import PurchaseSummary from '~/components/PurchaseSummary';
import {ScrollView} from 'react-native-gesture-handler';

const Loader = () => (
  <>
    <Placeholder Animation={Shine} style={{left: 20, top: 30}}>
      <View style={{flex: 1, flexDirection: 'row', width: 60}}>
        <PlaceholderLine
          width={85}
          height={50}
          style={{borderRadius: 90, margin: 10}}
        />
        <PlaceholderLine width={400} style={{marginTop: 10}} />
        <PlaceholderLine width={150} style={{marginTop: 35, right: 240}} />
        <PlaceholderLine width={150} style={{marginTop: 35, right: 195}} />
      </View>
    </Placeholder>

    <Placeholder Animation={Shine} style={{left: 20, top: 120}}>
      <View style={{flex: 1, flexDirection: 'row', width: 60}}>
        <PlaceholderLine
          width={85}
          height={50}
          style={{borderRadius: 90, margin: 10}}
        />
        <PlaceholderLine width={400} style={{marginTop: 10}} />
        <PlaceholderLine width={150} style={{marginTop: 35, right: 240}} />
        <PlaceholderLine width={150} style={{marginTop: 35, right: 195}} />
      </View>
    </Placeholder>

    <Placeholder Animation={Shine} style={{left: 20, top: 210}}>
      <View style={{flex: 1, flexDirection: 'row', width: 60}}>
        <PlaceholderLine
          width={85}
          height={50}
          style={{borderRadius: 90, margin: 10}}
        />
        <PlaceholderLine width={400} style={{marginTop: 10}} />
        <PlaceholderLine width={150} style={{marginTop: 35, right: 240}} />
        <PlaceholderLine width={150} style={{marginTop: 35, right: 195}} />
      </View>
    </Placeholder>

    <Placeholder Animation={Shine} style={{left: 20, top: 300}}>
      <View style={{flex: 1, flexDirection: 'row', width: 60}}>
        <PlaceholderLine
          width={85}
          height={50}
          style={{borderRadius: 90, margin: 10}}
        />
        <PlaceholderLine width={400} style={{marginTop: 10}} />
        <PlaceholderLine width={150} style={{marginTop: 35, right: 240}} />
        <PlaceholderLine width={150} style={{marginTop: 35, right: 195}} />
      </View>
    </Placeholder>
  </>
);

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [heightSummary, setHeightSummary] = useState(new Animated.Value(40));
  const [animationPosition, setAnimationPosition] = useState(1);
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
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
      {
        name: 'Abacate',
        brand: 'Irmão do jorel',
        price: 3.1,
        category: 'Fruta',
      },
    ];
    setProducts(itens);
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
      }}>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView style={{marginTop: 20, marginBottom: 0}}>
          {products.length ? renderProducts() : renderEmptyShop()}
        </ScrollView>
      )}
      <View
        onTouchStart={() => {
          setAnimationPosition(animationPosition ? 0 : 1);
          Animated.timing(heightSummary, {
            toValue: animationPosition ? 40 : 200,
            duration: 800,
          }).start();
        }}>
        <Animated.View
          style={{
            backgroundColor: Colors.second,
            flexDirection: 'row',
            alignSelf: 'flex-end',
            height: heightSummary,
          }}>
          <PurchaseSummary
            icon={animationPosition ? 'ios-arrow-down' : 'ios-arrow-up'}
          />
        </Animated.View>
      </View>

      <StatusBar backgroundColor={Colors.second} />
    </View>
  );
}
