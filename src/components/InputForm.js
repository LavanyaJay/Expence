import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function InputForm(props) {
  const check = <FontAwesomeIcon icon={faCheck} />;
  return (
    <div>
      <select name="type" onChange={props.onChange}>
        <option value=""></option>
        <option value="inc">+</option>
        <option value="exp">-</option>
      </select>
      <input
        name="desc"
        type="text"
        onChange={props.onChange}
        placeholder="Add description"
      />
      <input
        name="amount"
        type="number"
        onChange={props.onChange}
        placeholder="Value"
      />
      <button onClick={props.onClick}>{check}</button>
    </div>
  );
}
