import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Marie!</Text>
      <Text>The most challenging part of the setup was to create a new project in terminal. My lecturer had show us the steps a couple of times in class but because I am not yet familar with how to do it on my own, it was abit confusing.</Text>
      <Text>I was able to resolve it by just going through the steps on ARC and I managed to execute it!</Text>
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
