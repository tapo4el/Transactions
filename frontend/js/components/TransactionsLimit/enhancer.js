import { connect } from 'react-redux';

import { changeTransactionsLimit } from '../../actions';
import { getTransactionsLimit } from '../../selectors';

const mapDispatchToProps = dispatch => ({
  changeTransactionsLimit: payload => dispatch(changeTransactionsLimit(payload)),
});

const mapStateToProps = state => ({
  limit: getTransactionsLimit(state),
});

export default connect(mapStateToProps, mapDispatchToProps);
