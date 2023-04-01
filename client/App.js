import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/getList")
      .then(res => res.json())
      .then(list => {
        setList(list);
        console.log("List: ", list);
      });
  }, [])

  return (
    <View style={styles.container}>
      <Text>{list.toString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
