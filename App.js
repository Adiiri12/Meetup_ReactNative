import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import { DefaultTheme } from '@react-navigation/native';


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
      
            <Navigation theme={theme} />

    );
};
export default App;