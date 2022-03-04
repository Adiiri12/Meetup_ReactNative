import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import Home from '../../Pages/Home/HomePage';
import SearchHeader from '../Headers/SearchHeader';


const HomeNavigationStack = createStackNavigator();



const HomeNavigationStackComponent = () => {
    return (
        <HomeNavigationStack.Navigator
        screenOptions={({ navigation}) => ({
            header : () => <SearchHeader navigation={navigation}/>
        })}
        >
            <HomeNavigationStack.Screen
                name={NavigationScreens.Home.name}
                component={Home}
                //options={{ headerShown: false }}
            />
        </HomeNavigationStack.Navigator>
    );
};

export default HomeNavigationStackComponent