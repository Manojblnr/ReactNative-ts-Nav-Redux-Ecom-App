import React from "react";

import { BottomTabBarProps, BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackParamObj, RootStackScreenProps } from "./RootNavigator";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/CartScreen";
import DealsScreen from "../Screens/DealsScreen";
import ProfileScreen from "../Screens/ProfileScreen";


export type TabsStackParamObj = {
    Home: undefined;
    Cart: undefined;
    Deals: undefined;
    Profile: undefined;
}

const TabsStack = createBottomTabNavigator<TabsStackParamObj>();

export type TabsStackScreenProps<T extends keyof TabsStackParamObj> = CompositeScreenProps<BottomTabScreenProps<TabsStackParamObj, T>, RootStackScreenProps<"TabsStack">>;


export const TabsNavigator = () => {
    return (
        <TabsStack.Navigator screenOptions={{tabBarShowLabel:false}}>
            <TabsStack.Screen name="Home" component={HomeScreen} options={{headerShown: false, 
                tabBarIcon : ({focused}) => focused ? (
                    <Entypo name="home" size={24} color="#008E97"/>
                ) : (
                    <AntDesign name="home" size={24} color="black"/>
                )}}>

            </TabsStack.Screen>

            <TabsStack.Screen name="Cart" component={CartScreen} options={{headerShown: false, 
                tabBarIcon : ({focused}) => focused ? (
                    <AntDesign name="shoppingcart" size={24} color="#008E97"/>
                ) : (
                    <AntDesign name="shoppingcart" size={24} color="black"/>
                )}}>

            </TabsStack.Screen>

            <TabsStack.Screen name="Deals" component={DealsScreen} options={{headerShown: false, 
                tabBarIcon : ({focused}) => focused ? (
                    <Entypo name="home" size={24} color="#008E97"/>
                ) : (
                    <AntDesign name="home" size={24} color="black"/>
                )}}>

            </TabsStack.Screen>

            <TabsStack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false, 
                tabBarIcon : ({focused}) => focused ? (
                    <Ionicons name="person" size={24} color="#008E97"/>
                ) : (
                    <Ionicons name="person-outline" size={24} color="black"/>
                )}}>

            </TabsStack.Screen>
        </TabsStack.Navigator>
    )
}