import React from "react";
import {NativeStackScreenProps, createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigatorScreenParams } from "@react-navigation/native";
import { TabsNavigator, TabsStackParamObj } from "./TabNavigator";

export type RootStackParamObj = {
    TabsStack: NavigatorScreenParams<TabsStackParamObj>
    Deals: undefined 
    cart: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamObj>(); 

export type RootStackScreenProps<T extends keyof RootStackParamObj> = NativeStackScreenProps<RootStackParamObj, T>

export const RootNavigator = () => {
    return(
        <RootStack.Navigator>
            <RootStack.Screen name="TabsStack" component={TabsNavigator} options={{headerShown: false}}/>
        </RootStack.Navigator>
    )
}