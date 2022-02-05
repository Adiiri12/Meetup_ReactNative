import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text } from 'react-native-elements';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import Login from '../../Pages/Auth/Login';
import Create from '../../Pages/Auth/CreateAccount';



const LoginStack = createStackNavigator();


const LoginStackComponent = () => {
    return (
        <LoginStack.Navigator
        screenOptions={{
            headerShown: false
          }}>
            <LoginStack.Screen
                name={NavigationScreens.Login.name}
                component={Login}
                options={{ 
                    title: NavigationScreens.Login.title 
                }}
            />
              <LoginStack.Screen
                name={NavigationScreens.CreateAccount.name}
                component={Create}
                options={{ 
                    headerShown : true,
                    headerTitle: NavigationScreens.CreateAccount.title,
                    headerRight: () => (
                        <Text>Next</Text>
                    )
                }}
            />
        </LoginStack.Navigator>
    );
};

export default LoginStackComponent;