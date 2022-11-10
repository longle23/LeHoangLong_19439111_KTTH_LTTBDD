import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import candy from "../../assets/kem/icecandy.png";
import { Feather } from '@expo/vector-icons';

const Detail = () => {
  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <AntDesign name="caretleft" size={25} color="white" style={{ marginLeft: 20, backgroundColor: '#AB4F7D', borderRadius: 10 }} />

        <Text style={{ marginLeft: 100, fontSize: 23 }}>Details</Text>

        <AntDesign name="heart" size={24} color="red" style={{ marginLeft: 90, marginTop: 3 }} />
      </View>

      <Image source={candy} style={{ width: 320, height: 200, borderRadius: 45, marginTop: 35, width: '90%', height: '45%', alignSelf: 'center' }} />

      <Text style={{ fontWeight: 'bold', fontSize: 23, marginLeft: 18, marginTop: 12 }}>Creamy Ice</Text>

      <Text style={{ fontWeight: 'bold', fontSize: 23, marginLeft: 18, marginTop: 5 }}>$10.00</Text>

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 18, marginTop: 12 }}>Quantity</Text>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text style={{ fontSize: 25, marginLeft: 30 }}>-</Text>

        <Text style={{ fontSize: 25, marginLeft: 16 }}>1</Text>

        <Text style={{ fontSize: 25, marginLeft: 16 }}>+</Text>
      </View>

      <Text style={{ paddingLeft: 20, paddingRight: 20, marginTop: 15, fontSize: 14 }}>Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the</Text>

      <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center', justifyContent:'center', backgroundColor: '#AB4F7D', width: '85%', height: 50,borderRadius:30 ,alignItems:'center'}}>
        <Feather name="shopping-bag" size={24} color="white" />

        <Text style={{color:'white',fontSize:20,marginLeft:15}}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({

})