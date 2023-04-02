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

const NurseHistoryScreen = () => {
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
              source={require("../assets/arrow.png")}
            />
          </TouchableOpacity>
          <View style={styles.topBarTextBox}>
            <Text style={styles.topBarText}>Nikki Laude</Text>
          </View>

          <TouchableOpacity style={styles.messageButton}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./chat.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.rowOfText}>
        <Text style={styles.header1}>Heartbeat</Text>

        <Text styles={styles.littleButtonText} >
            Good
        </Text>

        </Text>
      {/* <Text style={styles.header1}>Heartbeat</Text> */}
        <View style={styles.imageTextRow}>
        <Image
          source={require("../assets/persona1.png")}
          style={styles.persona1}
        />
        </View>
        </View>

        <View style={styles.profileContainer}>
      <Text style={styles.header1}>Basic Information</Text>
        <View style={styles.imageTextRow}>
        <View style={styles.columnsOfText}> 
        <View style={styles.rowOfText}>
          <Text style={styles.boldHeader}>Address:</Text>
          <Text style={styles.regularText}> 308 Negra Arroyo Lane</Text>
        </View>


        </View>
        <Image
          source={require("../assets/persona1.png")}
          style={styles.persona1}
        />
        </View>
        </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>


        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  columnsOfText: {
    flexDirection: "column",
  },
  imageTextRow: {
    flexDirection: "row",
  },
    summaryContainer: {
        backgroundColor: "#F2FFFD",
        borderColor: "#858585",
        height: "27%",
        paddingHorizontal: 10,
        width: "90%",
        alignSelf: "center",
        marginBottom: 20,
        borderRadius: 10,
        elevation: 1,
      },

    summaryText: {
        paddingHorizontal: "3%",
        paddingVertical: "3%",
    },

  rowOfText: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  persona1: {
    marginLeft: 10,
    width: 368,
    height: 105,
    borderRadius: 32,
  },

  profileContainer: {
    backgroundColor: "#F2FFFD",
    height: 170,
    width: "90%",
    alignSelf: "center",
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

   littleButtonText: {
    paddingLeft: 60,
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 20,
    textAlign: "right",
  },

  header1: {
    paddingLeft: 10,
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 25,
    marginRight: 30,
    textAlign: "right",
  },

  boldHeader: {
    paddingLeft: 30,
    fontSize: 14,
    marginTop: 10,
    fontWeight: "bold",
  },

  regularText: {
    fontSize: 14,
    marginTop: 10,
  },
  header3: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 20,
    marginTop: 0,
  },

  topBarTextBox: {
    width: "75%",
    alignContent: "center",
    justifyContent: "center",
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

  messageButton: {
    borderRadius: "100%",
    height: 48,
    width: 48,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  linearGradient: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  topBarContainer: {
    flexDirection: "row",
    height: 94,
    width: 429,
    alignSelf: "center",
    justifyContent: "center",
  },

  appContainer: {
    flexDirection: "column",
    padding: 50,
    // alignContent: "center",
  },

  topBarText: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
  },
});

export default NurseHistoryScreen;
