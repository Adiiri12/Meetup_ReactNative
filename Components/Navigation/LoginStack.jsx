import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import Login from '../../Pages/Auth/Login';
import Create from '../../Pages/Auth/CreateAccount';



const LoginStack = createStackNavigator();


const LoginStackComponent = () => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen
                name={NavigationScreens.Login.name}
                component={Login}
                options={{ 
                    title: NavigationScreens.Login.title 
                }}
            />
              <LoginStack.Screen
                name={NavigationScreens.CreateAccount.name}
                component={Login}
                options={{ 
                    title: NavigationScreens.CreateAccount.title 
                }}
            />
        </LoginStack.Navigator>
    );
};

export default LoginStackComponent;