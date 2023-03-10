import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home'
import { New } from '../screens/New'
import { Habit } from '../screens/Habit'

export function AppRoutes(){
    return (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen 
        name='home'
        component={Home}
        />

    <Screen 
    name='new'
    component={New}
    />

    <Screen 
    name='habit'
    component={Habit}
    />
    </Navigator>
    );
}