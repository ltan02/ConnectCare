import { ScrollView } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";

export const ClientListHistory = () => {
  return (
    <View style={{ paddingTop: 25 }}>
      <View style={styles.profileContainer}>
        <Image
          style={{
            borderRadius: 10,
            marginLeft: 20,
            width: "90%",
            height: 170,
          }}
          source={require("../assets/heartbeat.png")}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          style={{
            borderRadius: 10,
            marginLeft: 20,
            width: "90%",
            height: 170,
          }}
          source={require("../assets/bloodPressure.png")}
        />
      </View>

      <ScrollView style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          {
            "7AM: Administered prescribed medication for pneumonia and herpes zoster. Ensured Nikki took her medication and provided her with water. Nikki’s temperature is starting to be too high and developed quickly overnight. Assessed Nikki's condition and instructed her to monitor her symptoms.\n\n8AM: Checked Nikki's vital signs, which included blood pressure, heart rate, and oxygen saturation levels. Noted Nikki's blood pressure was within normal limits, and her heart rate was slightly elevated.\n\n10AM: Administered prescribed medication for pneumonia and herpes zoster. Ensured Nikki took her medication and provided her with water. Nikki reported feeling short of breath and dizzy. Administered oxygen and monitored her conditions. Temperature starting to go back down into normal ranges, but still at levels of concern."
          }
        </Text>
      </ScrollView>
    </View>
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
    height: "32%",
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
});
