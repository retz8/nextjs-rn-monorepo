<<<<<<< HEAD:apps/native/App.tsx
import { View, Text } from "react-native";
import React from "react";

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@repo/ui/button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button text="Click me" onClick={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
>>>>>>> @{-1}:apps/ts-rn/App.tsx
