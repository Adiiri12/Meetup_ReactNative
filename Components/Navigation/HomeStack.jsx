import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import Home from '../../Pages/Home/HomePage';


const HomeNavigationStack = createStackNavigator();


const HomeNavigationStackComponent = () => {
    return (
        <HomeNavigationStack.Navigator>
            <HomeNavigationStack.Screen
                name={NavigationScreens.Home.name}
                component={Home}
                options={{ title: NavigationScreens.Home.title }}
            />
        </HomeNavigationStack.Navigator>
    );
};

export default HomeNavigationStackComponent