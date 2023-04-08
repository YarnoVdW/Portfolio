import {NativeBaseProvider, StatusBar} from "native-base";
import {HomeView} from "./src/HomeView";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Projects} from "./src/ProjectsView";
const Stack = createNativeStackNavigator();
const image = require('./assets/background2.jpeg');
export default function App() {
    console.log(image);
    return (
        <NavigationContainer>
            <StatusBar
                translucent
                backgroundColor="rgba(0, 0, 0, 0.2)"
                barStyle="dark-content"
            />
            <NativeBaseProvider>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeView}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen name="Projects" component={Projects} options={{
                        animation: "fade"
                        ,
                        headerBackTitleVisible: false,
                        headerTitle: "",
                        headerShown: false
                    }}/>
                </Stack.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
