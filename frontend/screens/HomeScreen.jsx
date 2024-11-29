import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import electronicsImg from '../assets/electronics.png';
import furnitureImg from '../assets/furniture.png';
import clothingImg from '../assets/clothing.png';
import gadgetsImg from '../assets/gadget.png';


// Get the screen width to make the image responsive
const { width } = Dimensions.get('window');

const data = [
  {
    _id: '1',
    name: 'Product 1',
    price: '1500',
    category: 'Electronics',
    description: 'This is a great product for everyday use.',
    image: electronicsImg,
  },
  {
    _id: '2',
    name: 'Product 2',
    price: '2000',
    category: 'Furniture',
    description: 'Stylish and comfortable chair for your office.',
    image: furnitureImg,
  },
  {
    _id: '3',
    name: 'Product 3',
    price: '2500',
    category: 'Clothing',
    description: 'High-quality jacket for cold weather.',
    image: clothingImg,
  },
  {
    _id: '4',
    name: 'Product 4',
    price: '3000',
    category: 'Gadgets',
    description: 'Latest tech gadget with amazing features.',
    image: gadgetsImg,
  },
];



const HomeScreen = () => {
  const navigation = useNavigation();

  // Function to open the website
  const openWebsite = () => {
    Linking.openURL('https://habib.edu.pk/dukaan/').catch(err => console.error('Failed to open URL:', err));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>
              Elevating{"\n"}Community's Shopping Experience
            </Text>
          </View>
          <View style={styles.imageContainer}>
            {/* Local Image from assets folder */}
            <Image
              source={require('../assets/hu_logo.jpg')} // Load the local image from assets
              style={styles.image}
            />
          </View>
        </View>

        {/* Marketplace Description Section */}
        <View style={styles.descriptionContainer}>
          {/* Upload Guide */}
          <Text style={styles.subtitle}>
            Want to sell something? Here's how to upload your ad:
          </Text>
          <Text style={styles.guideText}>
            1. Add your product details (name, price, and description).
            {'\n'}2. Upload relevant images that showcase your product.
            {'\n'}3. Post the ad and wait for potential buyers to reach out!
          </Text>

          {/* Button to navigate to CameraScreen for ad upload */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProductDetails')}
          >
            <Text style={styles.buttonText}>Upload an Ad</Text>
          </TouchableOpacity>

          {/* Link to the external website */}
          <TouchableOpacity onPress={openWebsite} style={styles.linkButton}>
            <Text style={styles.linkText}>Visit the HU Dukaan website</Text>
          </TouchableOpacity>
        </View>


        {/* Product Listings Section */}

        <View style={styles.itemsRow}>
        <Text style={styles.listingHeading}>Discover and Sell with Ease</Text>
          {data.map((item, index) => (
            <View key={item._id} style={[styles.itemCard, index % 2 === 0 && styles.itemCardLeft]}>
              <Image
                source={item?.image} 
                style={styles.itemImage}
              />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Price: {item.price} Pkr</Text>
              <Text style={styles.itemCategory}>Type: {item.category}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background for the container
  },
  heroSection: {
    flexDirection: 'row', // Row direction for side-by-side content
    justifyContent: 'space-between', // Space out text and image
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#431b42', // Dark Purple background (#431b42)
    borderBottomLeftRadius: 15, // Optional: rounded bottom left corner
    borderBottomRightRadius: 15, // Optional: rounded bottom right corner
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 50,
  },
  textContainer: {
    flex: 1, // Take up available space
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // White text
    marginBottom: 10,
    textAlign: 'left',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end', // Align the image to the right
  },
  image: {
    width: width * 0.4, // Responsive image width (adjust as necessary)
    height: width * 0.4, // Keep it square for the hero section
    borderRadius: 10,
    resizeMode: 'cover',
  },
  descriptionContainer: {
    padding: 20,
    backgroundColor: '#fff', // White background for the description section
    borderTopLeftRadius: 15, // Optional: rounded top left corner
    borderTopRightRadius: 15, // Optional: rounded top right corner
    marginTop: -20, // To remove gap from hero section
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#431b42',
    marginBottom: 10,
    textAlign: 'left',
  },
  guideText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    lineHeight: 20,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#431b42', // Dark Purple button color (#431b42)
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
  },
  linkButton: {
    marginTop: 20, // Space between the other sections
    alignItems: 'center',
  },
  linkText: {
    color: '#431b42', // Dark Purple color for the link text
    fontSize: 16,
    textDecorationLine: 'underline', // Makes the text look like a link
  },
  itemsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to the next row
    justifyContent: 'space-between', // Distribute items with space between them
    marginBottom: 20, // Optional: extra space between the products and bottom
  },
  itemCard: {
    backgroundColor: '#fff', // White background for the card
    borderRadius: 8, // Rounded corners
    padding: 15,
    marginBottom: 15, // Space between cards
    width: '45%', // Adjust width to fit two items per row (48% of screen width)
    marginRight: '2%', // Space between items
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Adding shadow for Android
  },
  itemCardLeft: {
    marginLeft: '2%', // Space between the first card and the second one in the row
  },
  itemImage: {
    width: '100%', // Full width of the card
    height: 150, // Fixed height for the image
    borderRadius: 8, // Rounded corners for the image
    marginBottom: 10, // Space below the image
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#431b42', // Primary blue color
  },
  itemCategory: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  itemDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  listingHeading: {
    fontSize: 22, // Slightly larger font size for prominence
    fontWeight: 'bold', // Bold text to draw attention
    color: '#431b42', // Deep purple shade to match the theme
    textAlign: 'center', // Center align the text
    marginVertical: 15, // Space above and below the heading
    letterSpacing: 1, // Optional: Add some spacing between letters for a cleaner look
    lineHeight: 28, // Adjust line height for a balanced appearance
     alignSelf: 'center',
     marginLeft: 40, 
  },
});

export default HomeScreen;
