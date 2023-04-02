import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export const ClientListHeader = () => {
  return (
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
          source={require("../assets/chat.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  topBarContainer: {
    flexDirection: "row",
    height: 94,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  topBarText: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
  },
});

