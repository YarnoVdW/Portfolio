import {NativeBaseProvider, StatusBar} from "native-base";
import {HomeView} from "./src/HomeView";
import React from "react";
import {Projects} from "./src/ProjectsView";
import {ProjectDetails} from "./src/ProjectDetails";
import {NavigationContainer} from "@react-navigation/native";
import {createSharedElementStackNavigator} from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();
export default function App() {
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
                    <Stack.Screen
                        name="Projects"
                        component={Projects}
                        options={{
                            animation: "fade",
                            headerBackTitleVisible: false,
                            headerTitle: "",
                            headerShown: false
                    }}/>
                    <Stack.Screen
                        name="ProjectDetails"
                        component={ProjectDetails}
                        options={{
                            headerBackTitleVisible: false,
                            headerTitle: "",
                            headerShown: false,
                            animation: "fade",

                        }}
                        sharedElements={(route, otherRoute, showing) => {
                            const { item } = route.params;
                            return [
                                {
                                    id:`item.${item.name}.name`,
                                    animation: 'move'
                                },
                                {
                                    id:`item.${item.description}.description`,
                                    animation: 'move'
                                },
                                {
                                    id:`item.${item.language}.language`,
                                    animation: 'move'
                                },
                                {
                                    id:`general.bg`,
                                    animation: 'move'
                                },
                            ];
                        }}/>
                </Stack.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
