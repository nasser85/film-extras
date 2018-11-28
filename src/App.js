import React, { Component } from 'react';
import logo from './logo.svg';
import Articles from './Articles'

import { ApolloClient, ApolloProvider } from 'react-apollo'

import './App.css';

const client = new ApolloClient()

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
              Learn React
          </header>
          <Articles />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
