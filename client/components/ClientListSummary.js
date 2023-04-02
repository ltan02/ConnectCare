import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";

export const ClientListSummary = () => {
  const [summary, setSummary] = useState("Prescribed medication administered for pneumonia and herpes zoster at 7AM and 10AM.\n\nNikki's temperature started to rise quickly overnight.\n\nVital signs checked at 8AM, blood pressure normal, heart rate slightly elevated.\n\nNikki reported feeling short of breath and dizzy at 10AM.\n\nAdministered oxygen and monitored her condition.\n\nTemperature starting to decrease but still at concerning levels.");
  
  useEffect(() => {
    const fullInput =
      "Please aggregate and summarize this medical log in condensed bullet points to note exclusively trends in vitals and important events across all the days to be extremely short as possible:" +
      "7AM: Administered prescribed medication for pneumonia and herpes zoster. Ensured Nikki took her medication and provided her with water. Nikki’s temperature is starting to be too high and developed quickly overnight. Assessed Nikki's condition and instructed her to monitor her symptoms. 8AM: Checked Nikki's vital signs, which included blood pressure, heart rate, and oxygen saturation levels. Noted Nikki's blood pressure was within normal limits, and her heart rate was slightly elevated.  10AM: Administered prescribed medication for pneumonia and herpes zoster. Ensured Nikki took her medication and provided her with water. Nikki reported feeling short of breath and dizzy. Administered oxygen and monitored her conditions. Temperature starting to go back down into normal ranges, but still at levels of concern.";
    fetch(`http://localhost:5000/api/getSummary/${fullInput}`).then((res) => setSummary(res.data));
  }, []);

  return (
    <View>
      <View style={styles.profileContainer}>
        <Text style={styles.header1}>Basic Information</Text>
        <View style={styles.imageTextRow}>
          <View style={styles.columnsOfText}>
            <View style={styles.rowOfText}>
              <Text style={styles.boldHeader}>Address:</Text>
              <Text style={styles.regularText}> 308 Negra Arroyo Lane</Text>
            </View>

            <View style={styles.rowOfText}>
              <Text style={styles.boldHeader}>Age:</Text>
              <Text style={styles.regularText}> 82</Text>
            </View>

            <View style={styles.rowOfText}>
              <Text style={styles.boldHeader}>Primary Caregiver:</Text>
              <Text style={styles.regularText}> Walter White</Text>
            </View>

            <View style={styles.rowOfText}>
              <Text style={styles.boldHeader}>Contact Number:</Text>
              <Text style={styles.regularText}> (604)-123-456 </Text>
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
          {"Prescribed medication administered for pneumonia and herpes zoster at 7AM and 10AM.\n\nNikki's temperature started to rise quickly overnight.\n\nVital signs checked at 8AM, blood pressure normal, heart rate slightly elevated.\n\nNikki reported feeling short of breath and dizzy at 10AM.\n\nAdministered oxygen and monitored her condition.\n\nTemperature starting to decrease but still at concerning levels."}
        </Text>
      </View>
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
    height: "55%",
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
    marginTop: 22,
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
