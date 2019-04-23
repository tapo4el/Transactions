import { combineReducers } from 'redux';

import transactions from './transactions';
import subscriptions from './subscriptions';
import transactionsLimit from './transactionsLimit';

export default combineReducers({
    transactions,
    subscriptions,
    transactionsLimit
});
