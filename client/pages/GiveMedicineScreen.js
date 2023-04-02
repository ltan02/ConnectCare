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

const GiveMedicineScreen = () => {
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
      <View style={styles.appContainer}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Image
                style={{ width: 30, height: 30 }}
                source={require("./arrow.png")}
              />
        </TouchableOpacity>
          <View style={styles.topBarTextBox}>
            <Text style={styles.topBarText}>
                Give Medicine
            </Text>
            </View>

            <Text style={styles.box}>

        </Text>
        </View>

        

        <View>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>

        <View>
          <Text style={styles.longText}>
            Did you successfully give the medicine?
          </Text>
        </View>

        <TouchableOpacity style={styles.yesButton}>
          <Text style={styles.yesText}>
            Yes
          </Text>
        </TouchableOpacity>
        


        <View>
          <Text style={styles.regularText}>
            Anything special you noticed?
          </Text>
        </View>

        <View style={styles.descriptionInput}>
          <TextInput style={styles.descriptionInputText} placeholder="Enter Observations Here..." />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    box: {
        borderRadius: "100%",
        height: 48,
        width: 48,
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#F2FFFD",
        
      },

    yesText: {
        paddingTop: "5%",
        fontWeight: "bold",
        fontSize: 18,
    },

    yesButton: {
        backgroundColor: "#FABE4B",
        width: "100%",
        height: 46,
        borderRadius: 10,
        alignSelf: "center",
        alignItems: "center",
        marginBottom: 20,
    },

  descriptionInputText: {
    paddingTop: "5%",
  },

  labelBoxContainer: {
    backgroundColor: "#F2FFFD",
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
    // marginRight: "10%",
  },

  backButton: {
    paddingLeft: 20,
    borderRadius: "100%",
    height: 48,
    width: 48,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  spacer: {
    height: 48,
    width: 48,
    alignSelf: "center",
    justifyContent: "center",
    // position: "absolute",
    // top: "24%",
    // right: "10%",
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

  inputBoxes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 0,
    marginHorizontal: 0,
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

    vitalsInput: {
      marginHorizontal: 24,
      
        backgroundColor: "#F2FFFD",
        borderColor: "#858585",
          height: 77,
          width: "45%",
          paddingHorizontal: 10,
          alignSelf: "center",
          marginTop: 10,
          marginBottom: 20,
          borderRadius: 10,
          elevation: 1,
    },

    vitalsInput2: {
      backgroundColor: "#FFFFFF",
      borderColor: "#858585",
        height: 77,
        paddingHorizontal: 5,
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
    // flexDirection: "row",
    // backgroundColor: "#F2FFFD",
    // height: 94,
    // width: 429,
    // alignSelf: "center",
    // justifyContent: "center",
    flexDirection: "row",
    height: 94,
    width: 429,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#F2FFFD",
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

  label: {
    width: 100,
    height: 77,
    backgroundColor: "#F2FFFD",
    paddingTop: 20,
    borderRadius: 10,
    fontSize: 15,
    color: "black",
    textAlign: "left",
    paddingLeft: 13,
    fontWeight: "bold",
  },

  labelBoxContainer: {
    borderRadius: 10,
    // backgroundColor: "#F2FFFD",
    width: 100,
    height: 77,
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

  export default GiveMedicineScreen;