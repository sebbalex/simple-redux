import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  changeItVehicleAction,
  changeItEventAction,
  addEventAction,
} from "./actions/actions";
import { connect } from "react-redux";

class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = { eventTitle: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      eventTitle: e.target.value,
    });
  }

  handleAddEvent() {
    this.props.onAddEventAction(this.state.eventTitle);
  }

  render() {
    const {
      vehicles,
      events,
      onChangeItClick,
      onChangeItEventAction,
    } = this.props;
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
            vehicles.byId.vehicle0.events.map((e) => {
              return events.byId[e].title;
            }),
            null,
            2
          )}
        </div>
        <br />
        <br />
        <label htmlFor="title">Titolo evento</label>
        <input type="text" name="title" onChange={this.handleInputChange} />
        <button onClick={this.handleAddEvent}>Add an event</button>
      </div>
    );
  }
}

Vehicles.propTypes = {
  vehicles: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
  onChangeItClick: PropTypes.func.isRequired,
};

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    vehicles: state.vehicles,
    events: state.events,
  };
}
// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  onChangeItClick: () => dispatch(changeItVehicleAction),
  onChangeItEventAction: () => dispatch(changeItEventAction),
  onAddEventAction: (eventTitle) => dispatch(addEventAction(eventTitle)),
});

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(Vehicles);

export default App;
