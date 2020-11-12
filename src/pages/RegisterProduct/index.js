import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';

import { TextInput, Text } from 'react-native-paper';

import { TextInputMask } from 'react-native-masked-text';

import Colors from '~/constants/Colors';

import { useSelector } from 'react-redux';

export default function RegisterProduct() {

    const barCode = useSelector(state => state.barCode.barCode);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    return (
        <View style={{ padding: 15, backgroundColor: 'white', flex: 1 }}>
            <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <Text
                style={{
                    color: Colors.primary,
                    fontWeight: '700',
                    fontSize: 25,
                    marginBottom: 30,
                    marginTop: 35,
                    width: 200
                }}>
                Registrar produto
            </Text>

            <View style={{ justifyContent: "space-between" }}>
                <TextInput
                    style={{
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 50,
                        backgroundColor: 'white',

                    }}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    autoFocus={true}
                    label="Nome"
                    mode={'outlined'}
                    value={name}
                    onChangeText={text => setName(text)}
                />

                <TextInput
                    style={{
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 25,
                        backgroundColor: 'white',
                    }}
                    keyboardType={'decimal-pad'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    label="Qual o preço do produto ?"
                    mode={'outlined'}
                    value={price.toString()}
                    onChangeText={number => setPrice(number)}
                    render={props => (
                        <TextInputMask
                            {...props}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: 'R$ ',
                                suffixUnit: '',
                            }}
                        />
                    )}
                />

                <TextInput
                    style={{
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 25,
                        backgroundColor: 'white',

                    }}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    label="Marca"
                    mode={'outlined'}
                    value={brand}
                    onChangeText={text => setBrand(text)}
                />

                <TextInput
                    style={{
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 25,
                        backgroundColor: 'white',

                    }}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    label="Código do produto"
                    mode={'outlined'}
                    value={barCode}
                    disabled
                />
            </View>


        </View>
    );
}
