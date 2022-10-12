import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

export default function Play() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>This will be where the game resides</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});