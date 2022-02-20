import { createStackNavigator } from '@react-navigation/stack';
import { Header as HeaderRNE, HeaderProps, Icon , Text , Button } from 'react-native-elements';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import Login from '../../Pages/Auth/Login';
import Create from '../../Pages/Auth/CreateAccount';
import Details from '../../Pages/Auth/Details';
import Verify from '../../Pages/Auth/Verify';
import Themes from '../../Pages/Auth/Themes';
import Bio from '../../Pages/Auth/Bio';
import SignUpHeader from '../Headers/SignupHeader';



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
                options ={{
                    headerShown : true,
                    header : () => <SignUpHeader props = {NavigationScreens.Detail.name}/>,
                }}
                
            />
             <LoginStack.Screen
                name={NavigationScreens.Detail.name}
                component={Details}
                options ={{
                    headerShown : true,
                    header : () => <SignUpHeader props = {NavigationScreens.Verify.name}/>,
                }}
                
            />
                 <LoginStack.Screen
                name={NavigationScreens.Verify.name}
                component={Verify}
                options ={{
                    headerShown : true,
                    header : () => <SignUpHeader props = {NavigationScreens.Themes.name}/>,
                }}
                />
                 <LoginStack.Screen
                name={NavigationScreens.Themes.name}
                component={Themes}
                options ={{
                    headerShown : true,
                    header : () => <SignUpHeader props = {NavigationScreens.Bio.name} />,
                }}
                />
                <LoginStack.Screen
                name={NavigationScreens.Bio.name}
                component={Bio}
                options ={{
                    headerShown : true,
                    header : () => <SignUpHeader />,
                }}
                />
        </LoginStack.Navigator>
    );
};

export default LoginStackComponent;