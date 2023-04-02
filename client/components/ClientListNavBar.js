import { StyleSheet, View, Text } from "react-native";

export const ClientListNavBar = (props) => {
  const selectedText = props.selectedText;
  const setSelectedText = props.setSelectedText;
  return (
    <View style={styles.navBarContainer}>
      <View style={styles.navBarBox}>
        <View>
          <Text
            style={[
              styles.navBarText,
              selectedText === "Summary" && styles.selectedText,
            ]}
            onPress={() => setSelectedText("Summary")}
          >
            Summary
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.navBarText,
              selectedText === "History" && styles.selectedText,
            ]}
            onPress={() => setSelectedText("History")}
          >
            History
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.navBarText,
              selectedText === "Record" && styles.selectedText,
            ]}
            onPress={() => setSelectedText("Record")}
          >
            Record
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.navBarText,
              selectedText === "Tasks" && styles.selectedText,
            ]}
            onPress={() => setSelectedText("Tasks")}
          >
            Tasks
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  navBarBox: {
    backgroundColor: "#DEFFFA",
    width: "85%",
    height: 43,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  navBarText: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#000",
    zIndex: 2,
  },
  selectedText: {
    fontWeight: "bold",
  },
});
