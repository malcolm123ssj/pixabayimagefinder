import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image 
        source = {{ uri: result.webformatURL}}
        style = {styles.imageStyle}
      />
      <Text style={styles.name}>{result.user}</Text>
      <Text>{result.likes} Likes, {result.favorites} Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    marginLeft: 15
  },
  imageStyle : {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name : {
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default ResultsDetails;