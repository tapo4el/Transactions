import React from 'react';
import { array } from 'prop-types';

import Transaction from '../Transaction';
import './styles.css';

class TransactionsList extends React.PureComponent {
    static propTypes = {
        transactions: array.isRequired
    };

    render() {
        const { transactions } = this.props;
        return (
            <div className="transactionsList">
                { transactions.map(el => <Transaction {...el}/>)}
            </div>
        );
    }
}

export default TransactionsList;
