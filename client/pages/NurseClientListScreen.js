import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-elements";

const NurseClientListScreen = () => {
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
            <Text style={styles.topBarText}>Client List</Text>
          </View>

          <TouchableOpacity style={styles.messageButton}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./chat.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.header}>Upcoming Tasks</Text>
          </View>
          <View>
            <Text style={styles.header}>Completed Tasks</Text>
          </View>
        </ScrollView>

      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingBottom: 200,
  },
  header: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
  columnsOfText: {
    flexDirection: "column",
  },
  imageTextRow: {
    flexDirection: "row",
  },
    summaryContainer: {
        backgroundColor: "#F2FFFD",
        borderColor: "#858585",
        height: "43%",
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
  },
  persona1: {
    marginLeft: 10,
    width: 106,
    height: 106,
    borderRadius: 32,
  },

  profileContainer: {
    backgroundColor: "#F2FFFD",
    height: 195,
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

  header1: {
    paddingLeft: 30,
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 25,
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

export default NurseClientListScreen;
