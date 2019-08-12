import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Button } from '~/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkblue',
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
  },
});

const App = () => (
  <View style={styles.container}>
    <View style={styles.textWrapper}>
      <Text style={styles.title}>
        qa-tools-app
      </Text>
      <Text style={styles.subtitle}>
        testing some tools
      </Text>
    </View>
    <Button round
            text="Click me"
    />
  </View>
);

export default App;
