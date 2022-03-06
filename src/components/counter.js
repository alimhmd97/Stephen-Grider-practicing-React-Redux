import React from "react";
import { connect } from "react-redux";
import { decreament, increament } from "../actions";
function Counter(props) {
  return (
    <div>
      <button onClick={props?.increament}>increament</button>
      <button onClick={props?.decreament}>decreament</button>
      <p>count: {props.countReducer} </p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { increament, decreament })(Counter);
