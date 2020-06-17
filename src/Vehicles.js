import React, { Component } from "react";
import PropTypes from "prop-types";
import { changeItVehicleAction, changeItEventAction } from './actions/actions'
import { connect } from "react-redux";


class Vehicles extends Component {
  render() {
    const { vehicles, events, onChangeItClick, onChangeItEventAction } = this.props;
    return (
      <div>
        <button onClick={onChangeItClick}>Change Vehicle0 name</button>
        <div>{JSON.stringify(vehicles?.byId?.vehicle0, null, 2)}</div>
        <br />
        <button onClick={onChangeItEventAction}>Change event1 name</button>
        <div>{JSON.stringify(events?.byId?.event1, null, 2)}</div>
        <br />
        <br />
        <div>
          Events for vehicle0:
          <br />
          {JSON.stringify(
            vehicles.byId.vehicle0.events.map(e => {
              return events.byId[e].title;
            })
            , null, 2)}</div>
      </div>
    );
  }
}

Vehicles.propTypes = {
  vehicles: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
  onChangeItClick: PropTypes.func.isRequired
};


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    vehicles: state.vehicles,
    events: state.events
  };
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onChangeItClick: () => dispatch(changeItVehicleAction),
    onChangeItEventAction: () => dispatch(changeItEventAction)
  };
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vehicles);

export default App;