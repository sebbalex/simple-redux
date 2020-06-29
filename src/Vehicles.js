import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  changeItVehicleAction,
  changeItEventAction,
  addEventAction,
  loadInitialValuesAction,
  updateVehicleTitle,
  pingApiAction,
} from './store/actions/actions';
import {connect} from 'react-redux';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {eventTitle: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      eventTitle: e.target.value,
    });
  }

  handleAddEvent(key) {
    this.props.onAddEventAction(this.state.eventTitle, key);
  }

  render() {
    const {
      vehicles,
      events,
      apis,
      onCallApi,
      onChangeItClick,
      onChangeItEventAction,
      onLoadDefaultValues,
      onChangeVehicleTitle,
      errorMessage,
    } = this.props;
    return (
      <div>
        {errorMessage && <h2>{errorMessage}</h2>}
        <button onClick={onChangeVehicleTitle}>Show Error</button>
        <br />
        <br />
        <button onClick={onLoadDefaultValues}>Load default values</button>
        <br />
        <br />
        <button onClick={onCallApi}>Call API</button>
        <div>{JSON.stringify(apis?.message, null, 2)}</div>
        <br />
        <br />
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
    apis: state.apis,
    errorMessage: state.errorMessage,
  };
}
// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  onCallApi: () => dispatch(pingApiAction),
  onLoadDefaultValues: () => dispatch(loadInitialValuesAction),
  onChangeItClick: () => dispatch(changeItVehicleAction),
  onChangeItEventAction: () => dispatch(changeItEventAction),
  onChangeVehicleTitle: () => dispatch(updateVehicleTitle(undefined, undefined)),
  onAddEventAction: (eventTitle, key) =>
    dispatch(addEventAction(eventTitle, key)),
});

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(Vehicles);

export default App;
