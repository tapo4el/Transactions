import React from 'react';
import { hot } from 'react-hot-loader/index';
import 'reset-css';

import './styles.css'

import TransactionsList from './components/TransactionsList';

class App extends React.Component {
    render() {
        return (
            <div className="transactions-app">
                <TransactionsList/>
            </div>
        );
    }
}

export default hot(module)(App);
