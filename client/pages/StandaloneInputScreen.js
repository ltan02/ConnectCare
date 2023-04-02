import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-elements";

export const StandaloneInputScreen = () => {
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
        <View style={styles.appContainer}>
          <View style={styles.topBarContainer}>
            <TouchableOpacity style={styles.backButton}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
            <View style={styles.topBarTextBox}>
              <Text style={styles.topBarText}>11 AM Record Measures</Text>
            </View>
          </View>

          <View>
            <Text style={styles.dateText}>{formattedDate}</Text>
          </View>

          <View>
            <Text style={styles.longText}>
              What's up? Let the doctors know by inputting information!
            </Text>
          </View>

          <View style={styles.descriptionInput}>
            <TextInput
              style={styles.descriptionInputText}
              placeholder="Enter Observations Here..."
            />
          </View>

          <TouchableOpacity style={styles.imageButton}>
            <Text style={styles.saveText}>Image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({


  descriptionInputText: {
    paddingTop: "5%",
  },
  inputBoxContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#858585",
      alignSelf: "center",
      borderRadius: 10,
    },

  topBarTextBox: {
    width: "75%",
    alignContent: "center",
    justifyContent: "center",
  },

  backButton: {
    borderRadius: "100%",
    height: 48,
    width: 48,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  saveButton: {
    backgroundColor: "#FABE4B",
    width: 119,
    height: 46,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 20,
      elevation: 1,
  },

  imageButton: {
    backgroundColor: "#FABE4B",
    width: 119,
    height: 46,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 42,
  },

  saveText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#3E3E3E",

  },

  linearGradient: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  
  row: {
    flexDirection: "row",
    alignItems: "center",
  },


  descriptionInput: {
    backgroundColor: "#FFFFFF",
    borderColor: "#858585",
      height: 195,
      paddingHorizontal: 10,
      width: "100%",
      alignSelf: "center",
      marginTop: 10,
      marginBottom: 20,
      borderRadius: 10,
      elevation: 1,
    },

  regularText: {
    paddingTop: 15,
    fontSize: 18,
  },

  topBarContainer: {
    flexDirection: "row",
    backgroundColor: "#F2FFFD",
    height: 94,
    width: 429,
    alignSelf: "center",
    justifyContent: "center",
  },

  dateText: {
    //fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    color: "#494949",
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
    paddingTop: 7,
    fontWeight: "bold",
  },

  topBarText: {
    fontSize: 25,
    color: "black",
    textAlign: "left",
    paddingLeft: 10,
  },

  longText: {
    fontSize: 16,
    color: "black",
    paddingLeft: 13,
    paddingVertical: 24,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "center-align",
    borderColor: "white",
    backgroundColor: "#F2FFFD",
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
  }
  });

  export default StandaloneInputScreen;