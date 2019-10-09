import React from 'react';
import {View, StatusBar} from 'react-native';

import ProductCard from '../../components/ProductCard';

export default function Products() {
  return (
    <View style={{flex: 1, marginTop: 15, backgroundColor: '#F2F3F4'}}>
      <ProductCard isSwipeable />
      <ProductCard />
    </View>
  );
}
