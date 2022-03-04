import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {NavigationTabs} from '../../Common/NavigationTabs/navigation';
import {NavigationScreens} from '../../Common/NavigationTabs/navigation';
import React, { useState } from 'react';
import { useTheme } from 'react-navigation';
import { useAuth } from '../../firebase/AuthProvider'
import TabStack from './TabStack';
import SearchHeader from '../Headers/SearchHeader';
import CustomDraw from './CustomDraw';

const TabNavigator = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const DrawStack = ({theme ,na}) =>{

    //const { currentUser , notLogedin } = useAuth();

 return (
    <Drawer.Navigator
    screenOptions={({ navigation}) => ({
        headerShown : false,
    })}
    drawerContent={(props) => <CustomDraw {...props} />}>
    <Drawer.Screen name={NavigationScreens.Home.name} component={TabStack} 
     options={{drawerLabel: 'First page Option'}} />
    </Drawer.Navigator>
 )};

 export default DrawStack;