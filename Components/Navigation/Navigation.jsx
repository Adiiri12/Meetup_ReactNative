import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const TabNavigator = createBottomTabNavigator();


const Navigation = ({theme}) =>{

    const { currentUser , notLogedin } = useAuth();

 return (
    <NavigationContainer theme={theme}>
         {!notLogedin && <LoginStackComponent />}
         {notLogedin &&(
        <TabNavigator.Navigator
         screenOptions={({ route }) => ({
             headerShown : false,
             tabBarShowLabel : false,
             tabBarStyle:{
                backgroundColor : '#233975'
              },
            tabBarIcon: ({ focused, color , size}) => {
                let iconName = '';
                if (route.name === NavigationTabs.Home.name) {
                    iconName = 'home';
                    size = 22;
                } else if (route.name === NavigationTabs.Post.name) {
                    iconName = 'add';
                    size = 40;
                }else if (route.name === NavigationTabs.Search.name) {
                    iconName = 'search';
                    size = 22;
                }else if (route.name === NavigationTabs.Profile.name) {
                    iconName = 'person';
                    size = 22 ;
                }
                return (
                    <Ionicons
                        name={iconName}
                        ios={`ios-${iconName}`}
                        size={size}
                        color={focused ? '#FFFFFF' : color}
                        style = {{borderRadius : 2}}
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
                        name={NavigationTabs.Post.name}
                        component={PostNavigationStackComponent}
                        options={{ title: NavigationScreens.Post.title}}
                    />
                       <TabNavigator.Screen
                        name={NavigationTabs.Search.name}
                        component={SearchNavigationStackComponent}
                        options={{ title: NavigationScreens.Search.title}}
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