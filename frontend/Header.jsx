import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



export default function Header() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
         {navigation.toggleDrawer && (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.drawerIcon}>
          <Text style={styles.drawerIconText}>☰</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.logo}>
        HU<Text style={styles.dukaan}>Dukaan</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70, 
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, 
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082', // Dark Purple for the logo text
  },
  dukaan: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#431b42', // Dark Purple for "ukaan"
  },
  drawerIcon: {
    position: 'absolute',
    left: 10, 
    top: 20, 
  },
  drawerIconText: {
    fontSize: 30,
    color: '#4B0082', 
  },
});
