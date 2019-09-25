import React from 'react';
import {View} from 'react-native';

import ProductCard from '../../components/ProductCard';

export default function Products() {
  return (
    <View style={{flex: 1, backgroundColor: '#F2F3F4'}}>
      <ProductCard />
      <ProductCard />
    </View>
  );
}
