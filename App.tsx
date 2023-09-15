import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

import Navbar from "./src/pages/Navbar";
import Scanner from "./src/pages/Scanner";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.text}>QRvoyant.</Text>
      </View>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <Button title="chat is this real" /> */}

      {/* QR camera component */}
      <Scanner />

      {/* NAV bar */}
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
    top: "10%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
