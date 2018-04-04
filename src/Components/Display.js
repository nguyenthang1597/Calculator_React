import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
        <div>
          {this.props.first}
        </div>
        <div>
          {this.props.operation === '+/-' ? '' : this.props.operation}  {this.props.second}
        </div>
        <div>
          {this.props.total}
        </div>
      </div>
    );
  }
}
Display.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  total: PropTypes.string,
  operation: PropTypes.string,
};
export default Display;