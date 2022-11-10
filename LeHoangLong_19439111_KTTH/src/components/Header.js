import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <Entypo name="menu" size={30} color="black" style={{ marginLeft: 20 }} />

            <Text style={{ marginLeft: 100, fontSize: 23 }}>IcYYY</Text>

            <Feather name="shopping-bag" size={30} color="black" style={{ marginLeft: 90, marginTop: 3 }} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: 'row',
    }
})