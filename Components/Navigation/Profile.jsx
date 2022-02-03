import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import ProfilePage from '../../pages/Profile/Profile';
const ProfileNavigationStack = createStackNavigator();
const ProfileNavigationStackComponent = () => {
    return (
        <ProfileNavigationStack.Navigator>
            <ProfileNavigationStack.Screen
                name={NavigationScreens.Profile.name}
                component={ProfilePage}
                options={{
                    title: NavigationScreens.Profile.title,
                }}
            />
        </ProfileNavigationStack.Navigator>
    );
};
export default ProfileNavigationStackComponent;