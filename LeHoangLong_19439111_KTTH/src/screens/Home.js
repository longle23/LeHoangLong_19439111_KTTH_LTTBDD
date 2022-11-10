import React, { useRef, useState, useEffect } from 'react';
import { useContext } from "react";
import { Animated, StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';
import banner from '../../assets/kem/onBoardImage.jpg'
import KemContext from '../Store/Context';
import KemItem from '../components/KemItem';

const Home = () => {
    const { kems } = useContext(KemContext);

    return (
        <View>
            <Header />

            <View style={{ alignSelf: 'center', marginTop: 25, position: "relative" }}>
                <Image source={banner} style={{ width: 320, height: 200, borderRadius: 45 }} >

                </Image>

                <Text style={{ position: 'absolute', marginTop: 160, marginLeft: 180, backgroundColor: "#AB4F7D", borderRadius: 20, width: 110, height: 28, textAlign: 'center', fontSize: 20 }}>Shop now</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: '#AB4F7D', width: 60, borderRadius: 12, marginLeft: 10 }}>
                    <Text style={{ fontSize: 21, textAlign: 'center', color: 'white' }}>All</Text>
                </View>

                <View style={{ backgroundColor: 'grey', width: 100, borderRadius: 12, marginLeft: 8 }}>
                    <Text style={{ fontSize: 21, textAlign: 'center', color: 'white' }}>Chocolate</Text>
                </View>

                <View style={{ backgroundColor: 'grey', width: 90, borderRadius: 12, marginLeft: 8 }}>
                    <Text style={{ fontSize: 21, textAlign: 'center', color: 'white' }}>Vanilla</Text>
                </View>

                <View style={{ backgroundColor: 'grey', width: 110, borderRadius: 12, marginLeft: 8 }}>
                    <Text style={{ fontSize: 21, textAlign: 'center', color: 'white' }}>Strawberry</Text>
                </View>
            </View>

            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: 'bold' }}>Popular Ice-Screams</Text>

                <Text style={{ fontSize: 18, marginTop: 4, marginLeft: 60, color: '#AB4F7D' }}>View All</Text>
            </View>

            <FlatList
                data={kems}
                renderItem={({ item }) => <KemItem kemItem={item} />}
                keyExtractor={(item) => `${item.id}`}
                horizontal={true}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})