import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const FamilyProfileScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={[`rgba(131, 255, 255, 0.45)`, `rgba(0, 187, 121, 0.45)`]}
    style={styles.linearGradient}
    >
      <View style={styles.progressBarBox}></View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  progressBarBox: {
    backgroundColor: "#F2FFFD",
    height: 195,
    paddingHorizontal: 20,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 1,
  },
});

export default FamilyProfileScreen;
