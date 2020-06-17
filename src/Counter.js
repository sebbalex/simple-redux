import React, { Component } from "react";
import PropTypes from "prop-types";
import {changeItAction} from './actions/actions'
import { connect } from "react-redux";


class Counter extends Component {
  render() {
    const { veichles, onChangeItClick } = this.props;
    // const v = this.state.veichles;
    return (
      <div>
        <button onClick={onChangeItClick}>Change Veichle0 name</button>
        <div>{veichles?.byId?.veichle0?.name}</div>
        {/* <div>{v?.byId?.veichle0?.name}</div> */}
      </div>
    );
  }
}

Counter.propTypes = {
  veichles: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
  onChangeItClick: PropTypes.func.isRequired
};


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    veichles: state.veichles,
    events: state.events
  };
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onChangeItClick: () => dispatch(changeItAction)
  };
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default App;