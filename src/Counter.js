import React, { Component } from "react";
import PropTypes from "prop-types";
import {changeItAction, increaseAction} from './actions'
import { connect } from "react-redux";


class Counter extends Component {
  render() {
    const { value, veichles, onIncreaseClick, onChangeItClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onChangeItClick}>Change Veichle0 name</button>
        <div>{veichles?.byId?.veichle0?.name}</div>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
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
    onIncreaseClick: () => dispatch(increaseAction),
    onChangeItClick: () => dispatch(changeItAction)
  };
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default App;