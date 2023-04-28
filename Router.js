import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Jobs from "./pages/Jobs";
import Favorited from "./pages/Favorited";
import Detail from "./pages/Detail";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function JobsPage() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Jobs" 
                component={Jobs} 
                options={{ 
                    headerTitleAlign: "center",
                    headerTintColor: "#EF5350",
                }} 
                />
            <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={{
                    headerTitleAlign: "center",
                    headerTintColor: "#EF5350",
                }}
            />
        </Stack.Navigator>
    );
}

function FavoritedPage() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="FavoritedScreen" 
                component={Favorited}
                options={{
                    headerTitleAlign: "center",
                    headerTintColor: "#EF5350",
                    title: "Favorited"
                }}
            />
        </Stack.Navigator>
    );
}

const Router = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerShown: false, drawerActiveTintColor: '#EF5350'}}>
                <Drawer.Screen 
                    name="JobsPage" 
                    component={JobsPage}
                    options={{
                        title: "Jobs"
                    }}
                />
                <Drawer.Screen 
                    name="FavoritedPage" 
                    component={FavoritedPage}
                    options={{
                        title: "Favorited"
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Router