import React from 'react';
import 'react-native-gesture-handler'
import Navigation from './Components/Navigation/Navigation';
import { AuthProvider } from './firebase/AuthProvider';


const App = () => {
    return (
      
        <AuthProvider>
            <Navigation />
        </AuthProvider>

    );
};
export default App;