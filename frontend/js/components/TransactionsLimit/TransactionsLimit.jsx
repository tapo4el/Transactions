import React from 'react';
import { string } from 'prop-types';

import './styles.css';

class Input extends React.PureComponent {
    static propTypes = {
        // limit: string.isRequired,
    };

    onChangeHandler = ({ target }) => {
        const { changeTransactionsLimit } = this.props;
        const limit = parseInt(target.value) || 0;

        changeTransactionsLimit(limit);
    };

    render() {
        const { limit } = this.props;
        return (
            <div className="transactionsLimit">
                <label>
                    Transactions limit:
                    <input type="number" className="limitInput" value={limit} onChange={this.onChangeHandler}/>
                </label>
            </div>
        );
    }
};

export default Input;
