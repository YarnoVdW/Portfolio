import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider, Box, Heading, HStack, Center, AspectRatio, Container} from "native-base";
import {HomeView} from "./src/HomeView";

import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Projects} from "./src/ProjectsView";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeView}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Projects" component={Projects}/>

          </Stack.Navigator>

        </NativeBaseProvider>
      </NavigationContainer>
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  }
});
