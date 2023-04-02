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
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View>
            <Text style={styles.header}>Medical Professional</Text>
            <View style={styles.flexbox}>
              <View style={styles.profilesContainer}>
                {/* <View style={styles.orangeContainer}></View> */}
                <Image source={require("../assets/user-profiles/RoyLee.png")} style={styles.persona} />
                <Text style={styles.personText}>Roy Lee</Text>
                <Text style={styles.profile}>Nurse</Text>
                <Text style={styles.telephone}>+7785599302</Text>
                <Text style={styles.clinic}>Royce Clinic</Text>
              </View>
              <View style={styles.profilesContainer}>
                <Image source={require("../assets/user-profiles/avaSun.png")} style={styles.persona} />
                <Text style={styles.personText}>Ava Sun</Text>
                <Text style={styles.profile}>Doctor</Text>
                <Text style={styles.telephone}>+7789399398</Text>
                <Text style={styles.clinic}>Royce Clinic</Text>
              </View>
              <Image source={require("../assets/user-profiles/AddButton.png")} style={styles.add} />
            </View>
          </View>
        </ScrollView>
        <ScrollView
          // style={styles.scrollView}
          horizontal={true}
          // showsHorizontalScrollIndicator={false}
          >

          <View>
            <Text style={styles.header6}>Family CareTaker</Text>
            <View style={styles.flexbox}>
              <View style={styles.profilesContainer}>
                {/* <View style={styles.orangeContainer}></View> */}
                <Image source={require("../assets/user-profiles/liamHu.png")} style={styles.persona} />
                <Text style={styles.personText}>Noa Hu</Text>
                <Text style={styles.profile}>Son</Text>
                <Text style={styles.telephone}>+7785599302</Text>
                <Text style={styles.clinic}>Lives together</Text>
              </View>
              <View style={styles.profilesContainer}>
                {/* <View style={styles.orangeContainer}></View> */}
                <Image source={require("../assets/user-profiles/liamHu.png")} style={styles.persona} />
                <Text style={styles.personText}>Hika Ma</Text>
                <Text style={styles.profile}>Son</Text>
                <Text style={styles.telephone}>+7785599302</Text>
                <Text style={styles.clinic}>Lives together</Text>
              </View>
              <View style={styles.profilesContainer}>
                {/* <View style={styles.orangeContainer}></View> */}
                <Image source={require("../assets/user-profiles/liamHu.png")} style={styles.persona} />
                <Text style={styles.personText}>Mily Ma</Text>
                <Text style={styles.profile}>Daughter</Text>
                <Text style={styles.telephone}>+7785599302</Text>
                <Text style={styles.clinic}>Lives together</Text>
              </View>
              <Image source={require("../assets/user-profiles/AddButton.png")} style={styles.add} />
            </View>
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
  flexbox: {
    flexDirection: "row",
    height: 30,
    marginBottom: 42,

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
  orangeContainer: {
    backgroundColor: "#FABE4B",
    height: 15,
    width: 10,
    borderRadius: 10,
    zIndex: -1,
  },
  profileContainer: {
    backgroundColor: "#F2FFFD",
    height: 195,
    paddingHorizontal: 20,
    width: "90%",
    alignSelf: "center",
    marginTop: 40,
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
  profilesContainer: {
    backgroundColor: "#F2FFFD",
    float: "left",
    height: 100,
    paddingHorizontal: 20,
    width: 140,
    marginLeft: 20,
    // alignSelf: "center",
    marginTop: 10,
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
    marginTop: 40,
  },
  header2: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 20,
    marginTop: 10,
  },
  header3: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 20,
    marginTop: 0,
  },
  header4: {
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 0,
  },
  persona: {
    position: "absolute",

    marginTop: 3,
    marginLeft: 87,

  },
  personText: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: -10,
  },
  profile: {
    marginLeft: -5,
    paddingBottom: 10,
    fontSize: 15,
    marginTop: 0,
    // backgroundColor: "#FABE4B",
    // borderRadius: 15,
  },
  telephone: {
    marginLeft: -5,
    paddingBottom: 0,
    fontSize: 15,
    marginTop: 5,
  },
  clinic: {
    marginLeft: -5,
    paddingBottom: 10,
    fontSize: 15,
    marginTop: 0,
  },
  add: {
    marginTop: 40,
    marginLeft: 30,
  },
  header6: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 0,
  },

});

export default FamilyProfileScreen;
