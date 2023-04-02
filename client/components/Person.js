import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Person = (props) => {
  return (
    <View style={styles.box}>
        <Image source={require(props.imagePerson)} style={styles.imagePerson} />
      <View>
        <Text style={styles.personText}>{props.person}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F2FFFD",
    height: 120,
    width: 120,
    paddingHorizontal: 20,
    paddingLeft: 20,
    // alignSelf: "center",
    marginBottom: 20,
    marginLeft: 25,
    borderRadius: 10,
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
  },
  personText: {
    fontSize: 20,
    lineHeight: 24,
  },
  completedByText: {
    paddingTop: 2.5,
    color: "#595959",
    fontSize: 14,
  },
  imagePerson: {
    position: "absolute",
    width: 80,
    height: 80,
  }
});
