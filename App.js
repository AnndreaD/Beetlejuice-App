/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NativeRouter, Route, Link, Routes} from 'react-router-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {Game} from './pages/game';
import {Home} from './pages/home';

import GameReducer from './store/GameReducer';

const staticImage = require('./assets/logo.png');

const store = createStore(GameReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Image style={styles.imageStyle} source={staticImage} />
          <View style={styles.innerContainer}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text style={styles.navItem}>Home</Text>
            </Link>

            <Link to="/game" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text style={styles.navItem}>Games</Text>
            </Link>
          </View>

          <View style={styles.pageContainer}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </View>
        </View>
      </NativeRouter>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 24,
  },
  innerContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
  },

  pageContainer: {
    marginTop: 100,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  navItem: {
    fontWeight: '600',
    display: 'flex',
    margin: 5,
  },
  highlight: {
    fontWeight: '700',
  },

  imageStyle: {
    resizeMode: 'contain',
    width: '80%',
    alignItems: 'center',
  },
});

export default App;
