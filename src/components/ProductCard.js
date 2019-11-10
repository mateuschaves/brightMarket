/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Vibration,
  TouchableOpacity,
} from 'react-native';

import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

const rightButtons = [
  <TouchableHighlight
    style={{
      marginTop: 5,
      backgroundColor: '#e74c3c',
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 10,
    }}>
    <>
      <Text
        style={{
          flexDirection: 'column',
          color: 'white',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: 17,
          fontWeight: '500',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        Remover
      </Text>
      <Icon
        style={{textAlign: 'center', alignSelf: 'center'}}
        name="delete"
        size={30}
        color="white"
      />
    </>
  </TouchableHighlight>,
];
export default function ProductCard({
  isSwipeable = true,
  bounceOnMount,
  name,
  price,
  brand,
  category,
  id,
  decrementAmountProduct,
  incrementAmountProduct,
}) {
  const [amount, setAmount] = useState(1);

  if (isSwipeable)
    return (
      <Swipeable
        bounceOnMount={bounceOnMount}
        onRightActionRelease={_ => Vibration.vibrate(100)}
        rightButtonWidth={110}
        rightButtons={rightButtons}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 10,
            borderRadius: 10,
            borderColor: '#0000',
            backgroundColor: '#FDFEFE',
            height: 100,
            shadowColor: '#000',
            shadowOffset: {
              width: 2,
              height: 5,
            },
            shadowOpacity: 0.7,
            shadowRadius: 45,
            elevation: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.3,
              borderColor: 'grey',
              borderRightWidth: 0.3,
            }}>
            <Image
              style={{width: 50, height: 50, marginLeft: 15, borderRadius: 90}}
              source={{uri: 'https://picsum.photos/seed/picsum/200'}}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: 'flex-start',
            }}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                marginLeft: 10,
                fontWeight: '500',
              }}>
              {name}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  color: 'grey',
                }}>
                {brand}
              </Text>
              <Text
                style={{
                  marginLeft: 7,
                  marginRight: 7,
                  fontSize: 14,
                  color: 'grey',
                }}>
                -
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'grey',
                }}>
                {category}
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={_ => {
                  if (amount == 1) {
                    Vibration.vibrate(50);
                  } else {
                    decrementAmountProduct(id);
                    setAmount(amount - 1);
                  }
                }}>
                <IconAnt
                  style={{
                    justifyContent: 'flex-start',
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                  name="minus"
                  color="#e74c3c"
                  size={15}
                />
              </TouchableOpacity>

              <Text style={{fontSize: 15, marginTop: 7, marginLeft: 5}}>
                {amount}
              </Text>

              <TouchableOpacity
                onPress={_ => {
                  setAmount(amount + 1);
                  incrementAmountProduct(id);
                }}>
                <IconAnt
                  style={{
                    justifyContent: 'flex-start',
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                  color="green"
                  name="plus"
                  size={15}
                />
              </TouchableOpacity>

              <Text
                style={{
                  marginLeft: 65,
                  marginTop: 5,
                  color: 'green',
                  fontWeight: '700',
                  marginRight: 15,
                  fontSize: 17,
                }}>
                R$ {(price * amount).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </Swipeable>
    );
  else
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          margin: 15,
          marginBottom: 5,
          marginTop: 5,
          borderRadius: 10,
          borderColor: 'black',
          backgroundColor: '#FDFEFE',
          height: 100,
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 5,
          },
          shadowOpacity: 0.7,
          shadowRadius: 45,
          elevation: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.3,
            borderColor: 'grey',
            borderRightWidth: 0.3,
          }}>
          <Image
            style={{width: 50, height: 50, marginLeft: 15, borderRadius: 90}}
            source={{uri: 'https://picsum.photos/seed/picsum/200'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: 'flex-start',
          }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,
              marginLeft: 10,
              fontWeight: '500',
            }}>
            {name}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                color: 'grey',
              }}>
              {brand}
            </Text>
            <Text
              style={{
                marginLeft: 7,
                marginRight: 7,
                fontSize: 14,
                color: 'grey',
              }}>
              -
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              {category}
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={_ => {
                if (amount == 1) {
                  Vibration.vibrate(50);
                } else {
                  setAmount(amount - 1);
                }
              }}>
              <IconAnt
                style={{
                  justifyContent: 'flex-start',
                  marginLeft: 10,
                  marginTop: 10,
                }}
                name="minus"
                color="#e74c3c"
                size={15}
              />
            </TouchableOpacity>

            <Text style={{fontSize: 15, marginTop: 7, marginLeft: 5}}>
              {amount}
            </Text>

            <TouchableOpacity onPress={_ => setAmount(amount + 1)}>
              <IconAnt
                style={{
                  justifyContent: 'flex-start',
                  marginLeft: 10,
                  marginTop: 10,
                }}
                color="green"
                name="plus"
                size={15}
              />
            </TouchableOpacity>

            <Text
              style={{
                marginLeft: 100,
                marginTop: 5,
                color: 'green',
                fontWeight: '700',
                marginRight: 15,
                fontSize: 17,
              }}>
              R$ {(price * amount).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    );
}
