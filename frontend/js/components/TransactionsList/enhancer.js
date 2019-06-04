import { connect } from 'react-redux';

import { getTransactions } from '../../selectors';

const mapStateToProps = state => ({
  transactions: getTransactions(state),
});

export default connect(mapStateToProps, null);
