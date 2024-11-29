import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductDetailsScreen = () => {
  const navigation = useNavigation();

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleNext = () => {
    // You can add validation here before navigating
    if (productName && productPrice && productDescription) {
      navigation.navigate('Camera', {
        productName,
        productPrice,
        productDescription,
      });
    } else {
      alert('Please fill out all the fields!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Product Details</Text>

      {/* Product Name */}
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />

      {/* Product Price */}
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
      />

      {/* Product Description */}
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={productDescription}
        onChangeText={setProductDescription}
        multiline
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#431b42', // Dark Purple button color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
