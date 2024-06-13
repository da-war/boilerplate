import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const Login = () => {
  return (
    <View>
      <Text>login</Text>
      <Text onPress={() => router.push("/home")}>Go to App</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
