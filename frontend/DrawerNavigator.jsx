import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './Header';
import ProfileScreen from './screens/ProfileScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => <Header />,  
        drawerType: 'slide',  
        drawerStyle: {
            backgroundColor: '#fff', // Change the background color of the sidebar
          },
          drawerActiveTintColor: '#431b42', // Purple color for the active item
          drawerActiveBackgroundColor: '#e8d2ee', // Light purple background for the active item
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
      }}
      
    >
       <Drawer.Screen
        name="Ayesha"
        component={ProfileScreen}
        initialParams={{
          name: 'Ayesha',
          image: require('./assets/ayesha.png'), // Replace with actual image
          major: 'CS Major, Senior',
          contributions: 'Worked on the backend and mobile app development, ensuring API integration and seamless user experience.',
          interests: ['Backend Development', 'Mobile Apps', 'UI/UX Design', 'AI Research'],
        }}
      />
      <Drawer.Screen
        name="Talha"
        component={ProfileScreen}
        initialParams={{
          name: 'Talha',
          image: require('./assets/talha.png'), // Replace with actual image
          major: 'CS Major, Senior',
          contributions: 'Worked on database management and frontend development, focusing on data structuring and responsive design.',
          interests: ['Database Systems', 'Frontend Development', 'Cloud Computing', 'Cybersecurity'],
        }}
      />
      <Drawer.Screen
        name="Hammad"
        component={ProfileScreen}
        initialParams={{
          name: 'Hammad',
          image: require('./assets/hammad.png'), // Replace with actual image
          major: 'CS Major, Senior',
          contributions: 'Worked on frontend development, building visually appealing and user-friendly components.',
          interests: ['Frontend Development', 'React Native', 'Game Design', 'Machine Learning'],
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;