import React from 'react';

// import Transaction from '../Transaction';
// import './styles.css';

class TransactionsList extends React.PureComponent {
    static propTypes = {
    };

    render() {
        const { transactions } = this.props;
        return (
            <div className="transactionsList">
                { transactions.map(el => <div>{el.id}</div>)}
            </div>
        );
    }
};

export default TransactionsList;
