import React, { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Task } from "../components/Task";
import { getUpcomingTasks, getCompletedTasks } from "../firebase/util";
import * as Progress from "react-native-progress";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const FamilyHomeScreen = () => {
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [percentageCompleted, setPercentageCompleted] = useState(0.0);
  const isFocused = useIsFocused();
  const navigation = useNavigation()

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

  const getAmPmDate = (str) => {
    const [hourStr, amPm] = str.split(/(?<=\d)(AM|PM)/i);
    const hour = parseInt(hourStr);
    const isPm = amPm.toLowerCase() === "pm";
    const date = new Date();
    date.setHours(hour + (isPm && hour !== 12 ? 12 : 0), 0, 0, 0);
    return date;
  };

  const userId = "yUBrwuWLyDTnMEAqanq4AYhbUJC2";
  useEffect(() => {
    const getTasks = async () => {
      const upcomingTasksObject = await getUpcomingTasks(userId);
      upcomingTasksObject.sort((a, b) => {
        const aTime = getAmPmDate(a.time);
        const bTime = getAmPmDate(b.time);
        return aTime.getTime() - bTime.getTime();
      });
      setUpcomingTasks(upcomingTasksObject);

      const completedTasksObject = await getCompletedTasks(userId);
      completedTasksObject.sort((a, b) => {
        const aTime = getAmPmDate(a.time);
        const bTime = getAmPmDate(b.time);
        return bTime.getTime() - aTime.getTime();
      });
      setCompletedTasks(completedTasksObject);
    };

    getTasks();
  }, [isFocused]);

  useEffect(() => {
    setPercentageCompleted(
      completedTasks.length / (completedTasks.length + upcomingTasks.length)
    );
  }, [upcomingTasks, completedTasks]);

  return (
    <LinearGradient
      colors={[`rgba(131, 255, 255, 0.45)`, `rgba(0, 187, 121, 0.45)`]}
      style={styles.linearGradient}
    >
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <View style={styles.rowHeader}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <View style={styles.progressBarBox}>
          <Progress.Circle
            progress={percentageCompleted}
            size={150}
            thickness={20}
            color="#FABE4B"
            fill="#F2FFFD"
            borderWidth={0}
            showsText={true}
            formatText={(progress) => (
              <View>
                <Text style={styles.progressText}>{`${Math.round(
                  percentageCompleted * 100,
                )}%`}</Text>
                <Text style={styles.subText}>of tasks</Text>
                <Text style={styles.subText}>completed</Text>
              </View>
            )}
            unfilledColor="#5AC6C6"
            style={styles.progressCircle}
          />
          <View>
            <Text style={styles.progressBarSubText}>Welcome back</Text>
            <Text style={styles.progressBarSubText}>
              {`Keep up the great\nwork!`}
            </Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.header}>Upcoming Tasks</Text>
            {upcomingTasks.map((task) => {
              return (
                <Task
                  key={Math.random().toString(16).substring(6)}
                  time={task.time}
                  task={task.task}
                  userId={userId}
                  taskId={task.id}
                  buttonText="Start"
                />
              );
            })}
          </View>
          <View>
            <Text style={styles.header}>Completed Tasks</Text>
            {completedTasks.map((task) => {
              return (
                <Task
                  key={Math.random().toString(16).substring(6)}
                  time={task.time}
                  task={task.task}
                  userId={userId}
                  taskId={task.id}
                  buttonText="View"
                  finishedByUserId={task.finishedBy}
                />
              );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.additionalInformationButton}
          onPress={() => navigation.navigate("AdditionalInfo")}
        >
          <Text style={styles.additionalInformationText}>
            Log Additional Information
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  scrollView: {
    flex: 1,
    paddingBottom: 200,
  },
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  date: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
  progressText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },
  subText: {
    fontSize: 12,
    color: "#595959",
  },
  progressBarBox: {
    backgroundColor: "#F2FFFD",
    height: 195,
    paddingHorizontal: 20,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  progressBarSubText: {
    fontSize: 18,
    paddingLeft: 10,
    flexWrap: "wrap",
    paddingBottom: 10,
  },
  progressCircle: {
    marginLeft: 10,
  },
  additionalInformationButton: {
    backgroundColor: "#FABE4B",
    width: "90%",
    height: 40,
    borderRadius: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    marginBottom: 15,
  },
  additionalInformationText: {
    textAlign: "center",
    fontSize: 20,
  },
  header: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
});

export default FamilyHomeScreen;
