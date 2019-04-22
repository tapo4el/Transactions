import { connect } from 'react-redux';

import { subscribeToTransaction, unSubscribeFromTransaction } from '../../actions';
import { getSubscriptions } from '../../selectors';

const mapDispatchToProps = dispatch => ({
    subscribe: payload => dispatch(subscribeToTransaction(payload)),
    unSubscribe: payload => dispatch(unSubscribeFromTransaction(payload)),
});

const mapStateToProps = state => ({
    subscriptions: getSubscriptions(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
