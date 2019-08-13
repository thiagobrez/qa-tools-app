import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
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

StatusBar.setBarStyle('light-content');

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>
        qa-tools-app
        </Text>
        <Text style={styles.subtitle}>
        You clicked {count} times
        </Text>
      </View>
      <Button round
              text="Click me"
              onPress={() => setCount(count + 1)}
      />
    </View>
  );
};

export default App;
