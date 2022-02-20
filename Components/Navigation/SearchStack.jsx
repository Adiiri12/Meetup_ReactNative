import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation'
import Search from '../../Pages/Search/Search';


const SearchNavigationStack = createStackNavigator();
const SearchNavigationStackComponent = () => {
    return (
        <SearchNavigationStack.Navigator>
            <SearchNavigationStack.Screen
                name={NavigationScreens.Search.name}
                component={Search}
                options={{ title: NavigationScreens.Search.title }}
            />
        </SearchNavigationStack.Navigator>
    );
};
export default SearchNavigationStackComponent;