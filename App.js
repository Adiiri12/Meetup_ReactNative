import React from 'react';
import 'react-native-gesture-handler'
import Navigation from './Components/Navigation/Navigation';
import { DefaultTheme } from '@react-navigation/native';
import { AuthProvider } from './firebase/AuthProvider';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#000',
        secondary: '#62BD69',
        background: '#eee',
    },
};
const App = () => {
    return (
      
        <AuthProvider>
            <Navigation theme={theme} />
        </AuthProvider>

    );
};
export default App;