import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import Header from './Header'; // Import Header
import { Camera } from 'react-native-vision-camera';
import DrawerNavigator from './DrawerNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for icons


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (

    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ProductDetails" 
        component={ProductDetailsScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Camera" 
        component={CameraScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#431b42',
          tabBarInactiveTintColor: '#888', // Gray for inactive icons
          tabBarStyle: { backgroundColor: '#fff' }, // White background for tabs
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // Use "home" for focused
            } else if (route.name === 'Camera') {
              iconName = focused ? 'camera' : 'camera-outline'; // Use "camera" for focused
            } else if (route.name === 'Team') {
              iconName = focused ? 'person' : 'person-outline'; // Use "person" for focused
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* HomeStack is wrapped in a Tab.Screen and uses the custom Header */}
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            header: () => <Header />,
          }}
        />
        {/* Portfolio Screen with custom Header */}
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            header: () => <Header />, 
          }}
        />
        {/* Project Screen with custom Header */}
        <Tab.Screen
          name="Team"
          component={DrawerNavigator}
          options={{
            headerShown: false, 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
