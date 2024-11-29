import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LaunchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image 
        source={require('../assets/hu_logo.jpg')} 
        style={styles.logo} 
      />

      {/* Tagline Section */}
      <Text style={styles.tagline}>HUDukaan</Text>
      <Text style={styles.subTagline}>
        Your one-stop marketplace for the HU community.
      </Text>

      {/* Navigation Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Enter App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#431b42', // Dark Purple
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Adjust logo size
    height: 150,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', // White text
    textAlign: 'center',
    marginBottom: 10,
  },
  subTagline: {
    fontSize: 16,
    color: '#eee', // Slightly lighter text for subtext
    textAlign: 'center',
    paddingHorizontal: 40, // For better text alignment on smaller screens
    lineHeight: 22,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#fff', // White button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#431b42', // Dark Purple text for button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LaunchScreen;
