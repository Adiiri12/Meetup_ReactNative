import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation'
import Post from '../../Pages/Post/Posts';
import Bookmarks from '../../Pages/Post/Bookmarks';
import { DrawerActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';

const PostNavigationStack = createStackNavigator();
const PostNavigationStackComponent = () => {
    const navigation = useNavigation(); 
    return (
        <PostNavigationStack.Navigator
        initialRouteName= {NavigationScreens.Post.name}
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
            <PostNavigationStack.Screen
                name={NavigationScreens.Post.name}
                component={Post}
                options={{ headerShown: false }}
            />
                <PostNavigationStack.Screen
                name={NavigationScreens.Bookmarks.name}
                component={Bookmarks}
                options={{ headerShown: true,
                title : NavigationScreens.Bookmarks.title ,
                headerLeft : () => (
                    <Icon
                    type="ionicon"
                    name="menu-outline" 
                    color="white"
                    size = {28}
                    style={{marginLeft : 10 , marginTop : -1}}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />)
                }}
            />
        </PostNavigationStack.Navigator>
    );
};
export default PostNavigationStackComponent;