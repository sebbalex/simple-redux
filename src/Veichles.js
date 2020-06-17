import React, { Component } from "react";
import PropTypes from "prop-types";
import {changeItVeichleAction} from './actions/actions'
import { connect } from "react-redux";


class Veichles extends Component {
  render() {
    const { veichles, onChangeItClick } = this.props;
    return (
      <div>
        <button onClick={onChangeItClick}>Change Veichle0 name</button>
        <div>{JSON.stringify(veichles?.byId?.veichle0, null, 2)}</div>
      </div>
    );
  }
}

Veichles.propTypes = {
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
    onChangeItClick: () => dispatch(changeItVeichleAction)
  };
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Veichles);

export default App;