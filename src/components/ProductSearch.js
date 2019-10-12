import React, {useState} from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';

export default function ProductSearch() {
  const [search, setSearch] = useState('');
  return (
    <View
      style={{
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
      }}>
      <Searchbar
        style={{borderRadius: 10}}
        placeholder="Ex. Macarrão miojo"
        onChangeText={query => setSearch(query)}
        value={search}
      />
    </View>
  );
}
