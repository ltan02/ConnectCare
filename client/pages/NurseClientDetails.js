import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ClientListHeader } from "../components/ClientListHeader";
import { StyleSheet } from "react-native";
import { ClientListNavBar } from "../components/ClientListNavBar";
import { useState } from "react";
import { ClientListSummary } from "../components/ClientListSummary";
import { ClientListHistory } from "../components/ClientListHistory";
import { ClientListRecord } from "../components/ClientListRecord";

const NurseClientDetails = () => {
  const [selectedText, setSelectedText] = useState("Summary");

  return (
    <LinearGradient
      colors={[`rgba(131, 255, 255, 0.45)`, `rgba(0, 187, 121, 0.45)`]}
      style={styles.linearGradient}
    >
      <StatusBar style="auto" />
      <ClientListHeader />
      <ClientListNavBar
        selectedText={selectedText}
        setSelectedText={setSelectedText}
      />
      {selectedText == "Summary" && <ClientListSummary />}
      {selectedText == "History" && <ClientListHistory />}
      {selectedText == "Record" && <ClientListRecord />}
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
});

export default NurseClientDetails;
