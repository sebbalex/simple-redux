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

  handleAddEvent(key) {
    const eventTitle = this.state.eventTitle;
    if (eventTitle === "") {
      console.warn("event title cannot be null");
      return;
    }
    this.props.onAddEventAction(this.state.eventTitle, key);
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

        <br />
        <VehiclesAddEvent
          vehicles={vehicles}
          events={events}
          handleInputChange={this.handleInputChange}
          handleAddEvent={this.handleAddEvent}
        />
      </div>
    );
  }
}
const VehiclesAddEvent = (props) =>
  Object.keys(props.vehicles.byId).map((key) => (
    <div key={key}>
      <div>
        Events for {key}:
        <br />
        {props.vehicles.byId[key].events.map((e, key) => (
          <>
            <span key={key}>{props.events.byId[e].title}</span>
            <br />
          </>
        ))}
      </div>
      <label htmlFor="title">Titolo evento</label>
      <input type="text" name="title" onChange={props.handleInputChange} />
      <button onClick={() => props.handleAddEvent(key)}>Add an event</button>
      <br />
      <br />
    </div>
  ));

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
  onAddEventAction: (eventTitle, key) =>
    dispatch(addEventAction(eventTitle, key)),
});

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(Vehicles);

export default App;
