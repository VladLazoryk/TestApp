import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PhotoScreen from './src/screens/DetailsScreen';
import { Provider } from 'react-redux';
import store from './src/store/store';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'Profile' }}
          />
          <Stack.Screen name="DetailsScreen" component={PhotoScreen} options={{ title: 'Detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}