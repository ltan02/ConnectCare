import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getUserInfo } from "../firebase/util";

export const Task = (props) => {
  const [finishedByName, setFinishedByName] = useState("");
  const [finishedByJobRole, setFinishedByJobRole] = useState("");
  const isUpcomingTask = props.buttonText === "Start";

  useEffect(() => {
    const getFinishedByInfo = async () => {
      const userInfo = await getUserInfo(props.finishedByUserId).catch(
        (error) => {},
      );
      setFinishedByName(userInfo.name);
      setFinishedByJobRole(userInfo.role);
    };

    if (!isUpcomingTask) {
      getFinishedByInfo();
    }
  }, []);

  let buttonBackgroundColor = "#FABE4B";
  if (!isUpcomingTask) {
    buttonBackgroundColor = "#D9D9D9";
  }

  let jobRole = "Family Member";
  if (finishedByJobRole === "DayCare") {
    jobRole = "Day Care Worker";
  }

  const buttonStyles = {
    backgroundColor: buttonBackgroundColor,
    width: 76,
    height: 46,
    borderRadius: 10,
    position: "absolute",
    alignItems: "center",
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  };

  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.taskText}>{props.time + " | " + props.task}</Text>
        {!isUpcomingTask && (
          <Text
            style={styles.completedByText}
          >{`Done by ${finishedByName} (${jobRole})`}</Text>
        )}
      </View>
      <TouchableOpacity style={buttonStyles}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F2FFFD",
    height: 64,
    paddingHorizontal: 20,
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  taskText: {
    fontSize: 20,
    lineHeight: 24,
  },
  buttonText: {
    color: "#383838",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  completedByText: {
    paddingTop: 2.5,
    color: "#595959",
    fontSize: 14,
  },
});
