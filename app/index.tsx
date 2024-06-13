import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Welcome to the app</Text>
      <Text onPress={() => router.push("/login")} style={styles.text}>
        Login
      </Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
