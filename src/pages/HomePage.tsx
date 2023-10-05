import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Navbar from "./Navbar";
import Scanner from "./Scanner";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.text}>QRvoyant.</Text>
      </View>
      <StatusBar style="auto" />
      <Scanner />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a3a3a",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    top: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
