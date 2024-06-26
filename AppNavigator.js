// AppNavigator.js
import React from 'react';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen ';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
