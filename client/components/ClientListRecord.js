import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export const ClientListRecord = () => {
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
    <View style={{ paddingTop: 15 }}>
      <View>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>

      <View>
        <Text style={styles.longText}>
          Please assess the client's state and take their vitals and any notes.
        </Text>
      </View>

      <View style={styles.inputBoxes}>
        <View style={styles.vitalsInput}>
          <Text style={styles.text}>Blood Pressure </Text>
        </View>

        <View style={styles.vitalsInput2}>
          <TextInput style={styles.vitalsInputText} placeholder="0" />
        </View>

        <Text> mmHg</Text>
      </View>

      <View style={styles.inputBoxes}>
        <View style={styles.vitalsInput}>
          <Text style={styles.text}>Heart Beat Rate </Text>
        </View>

        <View style={styles.vitalsInput2}>
          <TextInput style={styles.vitalsInputText} placeholder="0" />
        </View>
        <View style={styles.row}>
          <Text> bpm </Text>
          <Text style={{ color: "transparent" }}>h</Text>
        </View>
      </View>

      <View style={styles.inputBoxes}>
        <View style={styles.vitalsInput}>
          <Text style={styles.text}>Temperature Reading </Text>
        </View>

        <View style={styles.vitalsInput2}>
          <TextInput style={styles.vitalsInputText} placeholder="0" />
        </View>
        <View style={styles.row}>
          <Text> °C </Text>
          <Text style={{ color: "transparent" }}>ha</Text>
        </View>
      </View>

      <View style={{width: "90%", paddingLeft: 30}}>
        <View>
          <Text style={styles.regularText}>Log extra information:</Text>
        </View>
        </View>
        <View style={{width: "90%", justifyContent: "center", alignContent: "center", alignItems: "center", paddingLeft: 30}}>
        <View style={styles.descriptionInput}>
          <TextInput
            style={styles.descriptionInputText}
            placeholder="Enter Observations Here..."
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  vitalsInputText: {
    fontSize: 30,
    maxHeight: 77,
    minHeight: 77,
    maxWidth: 129,
    minWidth: 129,
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
    height: 100,
    paddingHorizontal: 10,
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 1,
  },

  vitalsInput: {
    marginHorizontal: 24,
    textAlignVertical: "center",
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
    flexDirection: "row",
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
    fontSize: 19.5,
    color: "black",
    textAlign: "left",
    paddingTop: 17.5,
    fontWeight: "bold",
  },

  topBarText: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
  },

  longText: {
    fontSize: 16,
    color: "black",
    paddingVertical: 24,
    paddingHorizontal: 15,
    paddingLeft: 20,
    textAlign: "center"
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
  },
});
