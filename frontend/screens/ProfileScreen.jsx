import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { name, image, major, contributions, interests } = route.params;

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.profileImage} />
      </View>

      {/* Name and Major */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.major}>{major}</Text>

      {/* Contributions */}
      <Text style={styles.sectionTitle}>Contributions</Text>
      <Text style={styles.description}>{contributions}</Text>

      {/* Interests */}
      <Text style={styles.sectionTitle}>Interests</Text>
      <View style={styles.interestsContainer}>
        {interests.map((interest, index) => (
          <View key={index} style={styles.interestTag}>
            <Text style={styles.interestText}>{interest}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff', // Light background
    padding: 20,
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#431b42',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#431b42',
    marginTop: 10,
  },
  major: {
    fontSize: 18,
    color: '#4B0082',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#431b42',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  interestTag: {
    backgroundColor: '#431b42',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
    margin: 5,
  },
  interestText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ProfileScreen;
