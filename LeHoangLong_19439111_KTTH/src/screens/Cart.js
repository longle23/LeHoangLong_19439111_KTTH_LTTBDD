import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import candy from "../../assets/kem/icecandy.png";
import { Feather } from '@expo/vector-icons';

const Cart = () => {
  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <AntDesign name="caretleft" size={25} color="white" style={{ marginLeft: 20, backgroundColor: '#AB4F7D', borderRadius: 10 }} />

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ marginLeft: 90, fontSize: 23 }}>Your Cart</Text>
        </View>
      </View>

      <Text style={{ marginLeft: 150, fontSize: 15, color: 'grey' }}>3 Items</Text>

      <View style={{ flexDirection: 'row' }}>
        <Image source={candy} style={{ width: 320, height: 200, borderRadius: 45, marginTop: 35, width: 90, height: 90, alignSelf: 'center' }} />

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 18, marginTop: 29 }}>Creamy Ice</Text>

          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 18, marginTop: 8 }}>$08.00</Text>
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 100, marginTop: 40 }}>X</Text>

        <Text style={{ marginTop: 75,right:15 }}>1X</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Image source={candy} style={{ width: 320, height: 200, borderRadius: 45, marginTop: 35, width: 90, height: 90, alignSelf: 'center' }} />

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 18, marginTop: 29 }}>Creamy Ice</Text>

          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 18, marginTop: 8 }}>$10.00</Text>
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 100, marginTop: 40 }}>X</Text>

        <Text style={{ marginTop: 75,right:15 }}>1X</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Image source={candy} style={{ width: 320, height: 200, borderRadius: 45, marginTop: 35, width: 90, height: 90, alignSelf: 'center' }} />

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 18, marginTop: 29 }}>Creamy Ice</Text>

          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 18, marginTop: 8 }}>$07.65</Text>
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 100, marginTop: 40 }}>X</Text>

        <Text style={{ marginTop: 75,right:15 }}>1X</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16, marginLeft: 18, marginTop: 29 }}>Promo code</Text>

        <TouchableOpacity style={{ backgroundColor: '#AB4F7D', width: 80, height: 30, alignItems: 'center', marginLeft: 160, borderRadius: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 20, justifyContent: 'center',color:'white'}}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 20, marginLeft: 18, marginTop: 29 }}>Discout</Text>

          <Text style={{ fontSize: 20, marginLeft: 18, marginTop: 8 }}>Total With Shipping</Text>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 100, marginTop: 20 }}>$0.00</Text>

          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 90, marginTop: 18 }}>$16.65</Text>
        </View>
      </View>

      <TouchableOpacity style={{ flexDirection: 'row', marginTop: 60, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#AB4F7D', width: '85%', height: 50, borderRadius: 30, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20, marginLeft: 15 }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({

})