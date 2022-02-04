import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import Login from '../../Pages/Auth/LoginScreen';
import Create from '../../Pages/Auth/CreateAccount';



const LoginStack = createStackNavigator();


const LoginStackComponent = () => {
    return (
        <HomeNavigationStack.Navigator>
            <HomeNavigationStack.Screen
                name={NavigationScreens.Login.name}
                component={Login}
                options={{ 
                    title: NavigationScreens.Login.title 
                }}
            />
              <HomeNavigationStack.Screen
                name={NavigationScreens.CreateAccount.name}
                component={Login}
                options={{ 
                    title: NavigationScreens.CreateAccount.title 
                }}
            />
        </HomeNavigationStack.Navigator>
    );
};

export default LoginStackComponent;