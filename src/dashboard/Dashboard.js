import React from 'react';
import { connect } from 'react-redux';

import Display from '../display/Display';
import Controls from '../controls/Controls';
import { toggleClosed, toggleLocked } from '../actions';

class Dashboard extends React.Component {
  render() {
    const { closed, locked, toggleLocked, toggleClosed } = this.props;

    return (
      <>
        <Display locked={locked} closed={closed} />
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={toggleLocked}
          toggleClosed={toggleClosed}
        />
      </>
    );
  }
}

const mapStateToProps = ({ closed, locked }) => ({
  closed,
  locked,
});

export default connect(mapStateToProps, {
  toggleClosed,
  toggleLocked,
})(Dashboard);
