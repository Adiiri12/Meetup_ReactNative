import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-navigation'

// const theme = useTheme();
// const styles = useStyles(theme);

const HomePage =  ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text>This is the HomePage</Text>
      <TouchableOpacity onPress={() => navigation.navigate(NavigationTabs.Profile.name)}>
       <Text>Profile Page</Text>
       </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomePage;