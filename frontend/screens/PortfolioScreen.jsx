import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PortfolioScreen = () => {
  const members = [
    { name: 'Ali Khan', role: 'Frontend Developer', contribution: 'Designed UI' },
    { name: 'Ayesha Ahmed', role: 'Backend Developer', contribution: 'API Development' },
    { name: 'Sara Iqbal', role: 'Database Manager', contribution: 'Database Setup' },
    { name: 'Ahmed Zafar', role: 'Project Manager', contribution: 'Managed Workflow' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Members</Text>
      {members.map((member, index) => (
        <View key={index} style={styles.member}>
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.role}>{member.role}</Text>
          <Text style={styles.contribution}>Contribution: {member.contribution}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  member: { marginBottom: 15 },
  name: { fontSize: 18, fontWeight: 'bold' },
  role: { fontSize: 16, color: '#555' },
  contribution: { fontSize: 14, color: '#888' },
});

export default PortfolioScreen;
