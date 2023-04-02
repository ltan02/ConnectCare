import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FamilyProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello World 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FamilyProfileScreen;
