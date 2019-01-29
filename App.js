import React from 'react';
import { StyleSheet, ToolbarAndroid,StatusBar,AppState } from 'react-native';
import { Provider } from 'react-redux';
import {store,persistor} from './src/store';
import AppNavigator from './src/Appnavigator'
import {PersistGate} from 'redux-persist/integration/react'

class App extends React.Component {
 

  
  render() {
    return (
      <Provider store ={ store }>
      <PersistGate persistor={persistor}>
      <StatusBar backgroundColor= 'blue' hidden = {false}    translucent = {true}/>
      <ToolbarAndroid
      style = {styles.toolbar}
      title="News"
      />
     <AppNavigator/>
     </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2196f3',
    height: 56,
    marginTop: StatusBar.currentHeight,
  },

});


export default App;