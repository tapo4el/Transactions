import { combineReducers } from 'redux';

import transactions from './transactions';
import subscriptions from './subscriptions';

export default combineReducers({
    transactions,
    subscriptions
});
