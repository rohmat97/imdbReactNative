/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import id from '../../../utils/locales/id';

export default class Fetching extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    let movies = this.state.dataSource.map((val, key) => {
      return (
        <View key={key} style={styles.container}>
          <Text>
            ID: {val.id} JUDUL: {val.title} RILIS:{val.releaseYear}
          </Text>
        </View>
      );
    });
    return <View style={styles.container}>{movies}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
});
