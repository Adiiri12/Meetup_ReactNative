import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {NavigationTabs} from '../../Common/NavigationTabs/navigation';
import HomeNavigationStackComponent from '../../Components/Navigation/HomeStack';
import ProfileNavigationStackComponent from '../../Components/Navigation/Profile';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-navigation';

const TabNavigator = createBottomTabNavigator();

const Navigation = ({theme}) =>{

 return (
    <NavigationContainer theme={theme}>
        <TabNavigator.Navigator
         screenOptions={({ route }) => ({
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
                        options={{ title: NavigationTabs.Home.title }}
                    />
                    <TabNavigator.Screen
                        name={NavigationTabs.Profile.name}
                        component={ProfileNavigationStackComponent}
                        options={{ title: NavigationTabs.Profile.title}}
                    />
        </TabNavigator.Navigator>
    </NavigationContainer>
 )};

 export default Navigation;