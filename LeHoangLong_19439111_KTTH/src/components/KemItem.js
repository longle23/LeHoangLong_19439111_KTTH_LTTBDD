import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import KemContext from "../Store/Context";

const KemItem = ({ kemItem }) => {
  const navigation = useNavigation();
  const { kemCart, setKemCart } = useContext(KemContext);

  const handleBuyBag = () => {
    navigation.navigate("Detail");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBuyBag}>
        <View style={{ alignItems: "center" }}>
          <View>
            <AntDesign name="hearto" size={24} color="black" style={{ marginLeft: 135 }} />

            <Image source={kemItem.image} style={{ height: 70, width: 100 }} />
          </View>

          <View>
            <Text style={{ marginTop: 20, fontSize: 18 }}>{kemItem.name}</Text>

            <Text style={{ fontSize: 18 }}>{kemItem.type}</Text>

            <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 12 }}>{kemItem.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default KemItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginRight: 30,
    marginTop: 30
  },
})