import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import Home from './components/Home';

export default function App() {
  let x = 1;
  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Home />
      {/* <Text>Bonjour, Monde! 👊🏽</Text>
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
