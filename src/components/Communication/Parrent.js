import React from "react";
import classes from "./Parrent.module.css";
import propTypes from 'prop-types'

function Parrent(props) {
  return (
    <div>
      <h3 className="text-center">Parrent</h3>
      <button className="btn btn-warning mb-2" onClick={props.click}>
        Change Car name
      </button>
      <br />
      <p className={classes.p}>Two way data binding</p>
      <input
        type="text"
        onChange={props.typing}
        value={props.inputName}
        placeholder="Type Something"
      ></input>
      <p>{props.inputName}</p>

      <hr />

      <hr />
    </div>
  );
}

Parrent.propTypes = {
  car: propTypes.object,
  inputName: propTypes.string,
  click: propTypes.func,
  typing: propTypes.func
}

export default Parrent;
