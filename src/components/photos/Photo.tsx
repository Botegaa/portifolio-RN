import React from 'react';
import { View,Image } from 'react-native';
import eu from '../../../assets/eu.png'


export function Photo() {
  return (
    <View >
        <Image source={eu}
            style={{
                borderRadius:200 / 2,
                borderColor:'grey',
                borderWidth:1,
                height:150,
                width:150,
                alignSelf:'center',

            }}
            />
   </View>
  );
}