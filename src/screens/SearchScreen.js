import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByViews = (viewsCount) => {
    return results.filter(result => {
      return (result.views <= viewsCount);
    });
  }

  return (
    <View style = {{flex : 1, backgroundColor: "#f79071"}}>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList 
          results={filterResultsByViews(100000)} 
          title="Popular"
        />
        <ResultsList 
          results={filterResultsByViews(200000)} 
          title="More Popular"
        />
        <ResultsList 
          results={filterResultsByViews(300000)} 
          title="Most Popular"
        />
      </ScrollView>
    </View>);
};

const styles = StyleSheet.create({});

export default SearchScreen;