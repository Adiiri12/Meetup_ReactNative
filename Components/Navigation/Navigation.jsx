import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {NavigationTabs} from '../../Common/NavigationTabs/navigation';
import {NavigationScreens} from '../../Common/NavigationTabs/navigation';
import LoginStackComponent from './LoginStack';
import HomeNavigationStackComponent from '../../Components/Navigation/HomeStack';
import ProfileNavigationStackComponent from '../../Components/Navigation/Profile';
import PostNavigationStackComponent from './PostStack';
import SearchNavigationStackComponent from './SearchStack';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-navigation';
import { useAuth } from '../../firebase/AuthProvider';
import TabStack from './TabStack';
import DrawStack from './DrawStack';
import { MenuProvider } from 'react-native-popup-menu';




const Navigation = ({theme}) =>{

    const { currentUser , notLogedin } = useAuth();
    //const [log ,  notLog] = useState(true);

    console.log(notLogedin)
 return (
   <MenuProvider>
    <NavigationContainer theme={theme}>
         {!notLogedin && <LoginStackComponent />}
         {currentUser && notLogedin && (
            <DrawStack/>)}
    </NavigationContainer>
    </MenuProvider>
 )};

 export default Navigation;