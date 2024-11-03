
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RootNavigator } from './src/Naviagtion/RootNavigator';

const App = () => { 

  return (
    <>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  }
});

export default App;
