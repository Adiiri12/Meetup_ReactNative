import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation'
import ProfilePage from '../../Pages/Profile/Profile';
import Settings from '../../Pages/Profile/Setting';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import ProfileHeader from '../Headers/ProfileHeader';

const ProfileNavigationStack = createStackNavigator();

function getHeaderTitle(route) {
    return getFocusedRouteNameFromRoute(route) ?? NavigationScreens.Profile.name;
  }
  
const ProfileNavigationStackComponent = () => {
    const navigation = useNavigation(); 
    return (
        <ProfileNavigationStack.Navigator
        initialRouteName= {NavigationScreens.Profile.name}
        screenOptions = {{
            headerStyle:{
                backgroundColor : '#233975',
            },
            headerTintColor : '#fff',
            headerTitleStyle : {
                fontWeight : 'bold',
            },

        }}
        >
            <ProfileNavigationStack.Screen
                name={NavigationScreens.Profile.name}
                component={ProfilePage}
                options={{ 
                    headerShown: true ,
                    header : () => ( <ProfileHeader/> )
                }}
            />
             <ProfileNavigationStack.Screen
                name={NavigationScreens.Setting.name}
                component={Settings}
                options={{
                    headerShown :  true, 
                    title : NavigationScreens.Setting.title,
                    headerLeft : () => (
                        <Icon
                        type="ionicon"
                        name="menu-outline" 
                        color="white"
                        size = {28}
                        style={{marginLeft : 10 , marginTop : -1}}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        />)
                        ,
                }}
            />
        </ProfileNavigationStack.Navigator>
    );
};
export default ProfileNavigationStackComponent;