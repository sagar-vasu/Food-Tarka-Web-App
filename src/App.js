import React from 'react';
import './App.css';
import Basic from './Config/Router/Router.js'
import { Provider } from 'react-redux'
import Store from './Store'


class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        
        <Basic />

      </Provider>

    )
  }
}
export default App;
