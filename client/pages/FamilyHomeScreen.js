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
import { Task } from "../components/Task";

const FamilyHomeScreen = () => {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  let daySuffix;

  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }

  const year = currentDate.getFullYear();
  const formattedDate = month + " " + day + daySuffix + ", " + year;

  return (
    <LinearGradient
      colors={[`rgba(131, 255, 255, 0.45)`, `rgba(0, 187, 121, 0.45)`]}
      style={styles.linearGradient}
    >
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <View style={styles.rowHeader}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <View style={styles.progressBarBox}></View>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.header}>Upcoming Tasks</Text>
            <Task time="11AM" task="Record Measures" buttonText="Start" />
            <Task time="4PM" task="Give Medicine" buttonText="Start" />
          </View>
          <View>
            <Text style={styles.header}>Completed Tasks</Text>
            <Task time="10AM" task="Give Medicine" buttonText="View" completedByName="Brian" completedByJobRole="Day Care Worker" />
            <Task time="8AM" task="Record Measures" buttonText="View" completedByName="Lance" completedByJobRole="Family Member" />
            <Task time="5AM" task="Record Measures" buttonText="View" />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.additionalInformationButton}>
          <Text style={styles.additionalInformationText}>
            Log Additional Information
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  scrollView: {
    flex: 1,
  },    
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  date: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
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
  additionalInformationButton: {
    backgroundColor: "#FABE4B",
    width: "90%",
    height: 40,
    borderRadius: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    marginBottom: 15,
  },
  additionalInformationText: {
    textAlign: "center",
    fontSize: 20,
  },
  header: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
});

export default FamilyHomeScreen;
