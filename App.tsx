import 'react-native-gesture-handler';
import React from 'react';
import LandingPage from './src/LandingPage';
import AlarmPage from './src/AlarmPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = ()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name = "Home"
                component = {LandingPage}
                options = {{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name = "Alarms"
                component = {AlarmPage}
                options = {{
                    headerStyle: {
                        backgroundColor: '#282a36',
                    },
                    headerTintColor: '#bd93f9',
                }}
            />
        </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;
