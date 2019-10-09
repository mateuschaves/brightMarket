import React from 'react';
import {View, StatusBar} from 'react-native';

import ProductCard from '../../components/ProductCard';
import Colors from '../../constants/Colors';

export default function Products() {
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <StatusBar backgroundColor={Colors.second} />
      <View style={{marginTop: 15}}>
        <ProductCard isSwipeable bounceOnMount={true} />
        <ProductCard />
      </View>
    </View>
  );
}
