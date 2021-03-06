import React from 'react';
import { string, func, arrayOf } from 'prop-types';

import './styles.css';

class Button extends React.PureComponent {
    static propTypes = {
      id: string.isRequired,
      subscribe: func.isRequired,
      unSubscribe: func.isRequired,
      subscriptions: arrayOf(string),
    };

    render() {
      const {
        id, subscribe, unSubscribe, subscriptions,
      } = this.props;
      const isSubscribed = subscriptions.includes(id);
      return (
        <div className="transaction">
          <div className="button">
            <button type="button" onClick={() => (isSubscribed ? unSubscribe(id) : subscribe(id))}>
              { isSubscribed ? 'UnSubscribe' : 'Subscribe' }
            </button>
          </div>
          <div className="text">
            id:
            {id}
          </div>
        </div>
      );
    }
}

export default Button;
