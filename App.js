import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  intialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Pixabay Image Search'
  }
});

export default createAppContainer(navigator);