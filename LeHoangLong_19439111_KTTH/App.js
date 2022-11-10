import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Button, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Cart from './src/screens/Cart';
import Favorite from './src/screens/Favorite';
import Shopping from './src/screens/Shopping';
import Profile from './src/screens/Profile';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Provider from './src/Store/Provider';
import Search from './src/screens/Search';

export function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTabs = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <AntDesign name="home" size={24} color="black" /> }} />

        <Tab.Screen name="Favorite" component={Favorite} options={{ tabBarIcon: () => <MaterialIcons name="favorite-border" size={24} color="black" /> }} />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  height: 60,
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 30,
                  top: -25,
                  elevation: 5,
                  backgroundColor: '#AB4F7D',
                }}>
                <AntDesign name="search1" size={24} color="white" />
              </View>
            ),
          }}
        />

        <Tab.Screen name="Shopping" component={Shopping} options={{ tabBarIcon: () => <AntDesign name="shoppingcart" size={24} color="black" /> }} />

        <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => <AntDesign name="user" size={24} color="black" /> }} />

      </ Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Detail" component={Detail} />

        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({

});
