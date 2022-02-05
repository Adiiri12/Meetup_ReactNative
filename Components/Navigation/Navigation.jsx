import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {NavigationTabs} from '../../Common/NavigationTabs/navigation';
import {NavigationScreens} from '../../Common/NavigationTabs/navigation';
import LoginStackComponent from './LoginStack';
import HomeNavigationStackComponent from '../../Components/Navigation/HomeStack';
import ProfileNavigationStackComponent from '../../Components/Navigation/Profile';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-navigation';

const TabNavigator = createBottomTabNavigator();


const Navigation = ({theme}) =>{
    const [clicked, setClicked] = useState(false);

 return (
    <NavigationContainer theme={theme}>
         {!clicked && <LoginStackComponent />}
         {clicked && (
        <TabNavigator.Navigator
         screenOptions={({ route }) => ({
             headerShown : false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = '';
                if (route.name === NavigationTabs.Home.name) {
                    iconName = 'home';
                } else if (route.name === NavigationTabs.Profile.name) {
                    iconName = 'person';
                }
                return (
                    <Ionicons
                        name={iconName}
                        ios={`ios-${iconName}`}
                        size={size}
                        color={focused ? theme.colors.secondary : color}
                    />
                );
            },
           })}
        >
          <TabNavigator.Screen
                        name={NavigationTabs.Home.name}
                        component={HomeNavigationStackComponent}
                        options={{ title: NavigationScreens.Home.title }}
                    />
                    <TabNavigator.Screen
                        name={NavigationTabs.Profile.name}
                        component={ProfileNavigationStackComponent}
                        options={{ title: NavigationScreens.Profile.title}}
                    />
        </TabNavigator.Navigator>
         )}
    </NavigationContainer>
 )};

 export default Navigation;