import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function FamilyInputScreen() {
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
    <View style={styles.appContainer}>
      <View style={styles.topBarContainer}>
        <Button title="Back"> </Button>
        <Text> 11 AM Record Measures</Text>
      </View>

      <View>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>

      <View>
        <Text style={styles.longText}>
          It's time to record the blood pressure and heartbeat of Nikki!
        </Text>
      </View>

      <View style={styles.textBoxContainer}>
        <View>
          <Text style={styles.label}>Blood Pressure</Text>
        </View>
        <View>
          <TextInput style={styles.textInput} placeholder="0" />
        </View>
        <Text> mmHg</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <View>
          <Text style={styles.label}>Heart Rate</Text>
        </View>
        <View>
          <TextInput style={styles.textInput} placeholder="0" />
        </View>
        <Text> bpm </Text>
      </View>

      <View>
        <Text style={styles.regularText}>
          Log extra information for nurses:
        </Text>
      </View>

      <View>
        <TextInput style={styles.descriptionInput} placeholder="Bruh" />
      </View>

      {/* <View style={styles.descriptionInputContainer}>
        <TextInput style={styles.descriptionInput} placeholder="Bruh" />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FABE4B",
    width: 76,
    height: 46,
    borderRadius: 10,
    position: "absolute",
    alignItems: "center",
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },

  saveButton: {
    backgroundColor: "#FABE4B",
    radius: 10,
    width: 50,
    shadowOpacity: 25,
    paddingTop: 33,
  },

  descriptionInput: {
    borderWidth: 1,
    borderColor: "#858585",
    width: "354",
    height: 173,
    marginRight: 8,
    padding: 8,
    borderRadius: 10,
    paddingTop: 3,
    textAlignVertical: "top",
  },

  regularText: {
    paddingTop: 15,
    fontSize: 18
  },

  topBarContainer: {
    flexDirection: "row",
  },

  dateText: {
    //fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
  },

  appContainer: {
    flexDirection: "column",
    padding: 50,
    // alignContent: "center",
  },

  text: {
    fontSize: 25,
    color: "black",
    textAlign: "left",
    paddingLeft: 10,
    fontWeight: "bold",
  },

  longText: {
    fontSize: 16,
    color: "black",
    paddingLeft: 13,
    paddingVertical: 24,
  },
  
  label: {
    width: 125,
    height: 77,
    backgroundColor: "#F2FFFD",
    paddingTop: "10%",
    borderRadius: 10,
    fontSize: 25,
    color: "black",
    textAlign: "left",
    paddingLeft: 13,
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "center-align",
    borderColor: "white",
    color: "white",
    alignContent: "center",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#858585",
    width: 120,
    height: 77,
    marginLeft: 25,
    marginRight: 7,
    padding: 8,
    borderRadius: 10,
  },
});