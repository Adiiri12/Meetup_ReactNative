import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation'
import Search from '../../Pages/Search/Search';
import SearchResults from '../../Pages/Search/SearchResults';
import DiscoverHeader from '../Headers/DiscoverHeader';
import SearchProfile from '../../Pages/Search/SearchProfile';


const SearchNavigationStack = createStackNavigator();
const SearchNavigationStackComponent = () => {
    return (
        <SearchNavigationStack.Navigator
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
            <SearchNavigationStack.Screen
                name={NavigationScreens.Search.name}
                component={Search}
                options={{ 
                    headerShown: true,
                    header : () => (<DiscoverHeader/>)
                }}
            />
            <SearchNavigationStack.Screen
                name={NavigationScreens.SearchResults.name}
                component={SearchResults}
                options={{ 
                    headerShown: true,
                    header : () => (<DiscoverHeader/>)
                }}
            />
             <SearchNavigationStack.Screen
                name={NavigationScreens.SearchProfile.name}
                component={SearchProfile}
                options={{ 
                    headerShown: false,
                    //header : () => (<DiscoverHeader/>)
                }}
            />
        </SearchNavigationStack.Navigator>
    );
};
export default SearchNavigationStackComponent;