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
        <View style={styles.profileContainer}>
          <Text style={styles.header1}>Nikki Laude</Text>
          <Text style={styles.header2}>Age: 82</Text>
          <Text style={styles.header3}>Care level: 5</Text>
          <Image source={require("../assets/persona1.png")} style={styles.persona1} />
        </View>
        <View style={styles.rowHeader}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.header4}>Nikki Laude's Cicle</Text>
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
  persona1: {
    position: "absolute",
    marginTop: 30,
    marginLeft: 250,
    width: "32%",
    height: "60%",
    borderRadius: 32,
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
  rowHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 40,
  },
  header: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
  header1: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
    marginTop:40,
  },
  header2: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 20,
    marginTop:10,
  },
  header3: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 20,
    marginTop:0,
  },
  header4: {
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
    marginTop:0,
  },
  
});

export default FamilyProfileScreen;
