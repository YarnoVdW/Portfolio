import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import {NativeBaseProvider, Box, View, Heading, HStack, Stack, Center, AspectRatio, Container} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>


    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTest: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
