import { StyleSheet, SafeAreaView, View, Text, TouchableHighlight } from 'react-native';
import Play from './Play';

export default function Home() {
  let content;

  const onPressPlay = () => {
    content =  <Play />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>3&2</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={onPressPlay}
      >
        <Text style={styles.buttonText}>Play</Text>
      </TouchableHighlight>
      { content }
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
  heading: {
    fontFamily: 'Arial',
    fontSize: 36,
    color: '#000'
  },
  button: {
    height: 60,
    backgroundColor: '#0000FF',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Helvetica'
  }
});