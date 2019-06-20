import React from 'react';
import { connect } from 'react-redux';

import Display from '../display/Display';
import Controls from '../controls/Controls';
import { toggleClosed, toggleLocked } from '../actions';

class Dashboard extends React.Component {
  // state = {
  //   locked: false,
  //   closed: false,
  // };

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

  // toggleLocked = () => {
  //   this.setState(prev => ({ locked: !prev.locked }));
  // };

  // toggleClosed = () => {
  //   this.setState(prev => ({ closed: !prev.closed }));
  // };
}

const mapStateToProps = ({ closed, locked }) => ({
  closed,
  locked,
});

export default connect(mapStateToProps, {
  toggleClosed,
  toggleLocked,
})(Dashboard);
