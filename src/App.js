import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './component/header';
import store from './store';

console.log(store)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Header />
      </Provider>
    );
  }
}

export default App;
