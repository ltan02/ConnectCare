import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const FamilyProfileScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={[`rgba(131, 255, 255, 0.45)`, `rgba(0, 187, 121, 0.45)`]}
      style={styles.linearGradient}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.profileContainer}></View>
        <View style={styles.rowHeader}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.header}>Medical Professional</Text>
          </View>
        </ScrollView>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.header}>Family CareTaker</Text>
          </View>
        </ScrollView>
      </View>


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
  profileContainer: {
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
  header: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
});

export default FamilyProfileScreen;
