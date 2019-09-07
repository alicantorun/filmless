import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage, Keyboard } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import colors from '../../../Constants/colors';
import isSmallScreen from '../../../utils/isSmallScreen';
import sortMovies from '../../../utils/sortMovies';
import Lister from './Lister';
import WatchlistPreviews from './WatchlistPreviews';

const WatchlistScreen = props => {

  const [watchlist, setWatchlist] = useState([]);
  const [sortMethod, setSortMethod] = useState(null);
  const [sortDirection, setSortDirection] = useState('des');

  useEffect(() => {
    const loadWatchlist = async () => {
      try {
        let watchlist = await AsyncStorage.getItem('watchlist');
        if (watchlist) {
          watchlist = JSON.parse(watchlist);
          watchlist.forEach(movie => movie.inWatchlist = true);
          setWatchlist(watchlist.reverse());
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadWatchlist();
  }, [props.isFocused]);

  useEffect(() => Keyboard.dismiss(), [props.isFocused])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watchlist</Text>
      <Lister 
        sortDirection={sortDirection}
        sortMethod={sortMethod}
        setSortMethod={sortMethod => {
          setSortMethod(sortMethod);
          setWatchlist(sortMovies([...watchlist], sortMethod, sortDirection));
        }} 
        setSortDirection={() => {
          setSortDirection(sortDirection == 'asc' ? 'des' : 'asc');
          setWatchlist([...watchlist].reverse());
        }}
      />
      <WatchlistPreviews
        watchlist={watchlist} 
        selectMovie={movie => {
          props.navigation.navigate(
            'MovieScreen', { movie, loadDetails: false }
          );
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01,
  },
  title: {
    justifyContent: 'flex-end',
    color: colors.text01,
    fontSize: 38,
    paddingTop: isSmallScreen() ? 10 : 20,
    paddingHorizontal: 28,
  }
});

export default withNavigationFocus(WatchlistScreen);