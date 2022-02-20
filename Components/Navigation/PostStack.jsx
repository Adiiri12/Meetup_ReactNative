import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation'
import Post from '../../Pages/Post/Posts';


const PostNavigationStack = createStackNavigator();
const PostNavigationStackComponent = () => {
    return (
        <PostNavigationStack.Navigator>
            <PostNavigationStack.Screen
                name={NavigationScreens.Post.name}
                component={Post}
                options={{ title: NavigationScreens.Post.title }}
            />
        </PostNavigationStack.Navigator>
    );
};
export default PostNavigationStackComponent;