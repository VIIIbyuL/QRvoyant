import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#808080",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: "absolute",
    bottom: 0,
    width: "100%",
    gap: 20,
  },
  button: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
