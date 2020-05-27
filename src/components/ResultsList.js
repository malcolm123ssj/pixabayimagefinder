import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetails from './ResultsDetails';

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{ title }</Text>
      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetails result={item} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});

export default ResultsList;