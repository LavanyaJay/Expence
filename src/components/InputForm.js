import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function InputForm(props) {
  const check = <FontAwesomeIcon icon={faCheck} />;
  return (
    <div>
      <form onSubmit={props.onSubmit} className="form">
        <select
          name="type"
          onChange={props.onChange}
          value={props.values.type}
          required
        >
          <option defaultValue=""></option>
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>
        <input
          name="desc"
          type="text"
          className="desc"
          onChange={props.onChange}
          placeholder="Add description"
          value={props.values.desc}
          required
        />
        <input
          name="amount"
          type="decimal"
          className="amount"
          onChange={props.onChange}
          placeholder="Value"
          value={props.values.amount}
          required
        />
        <button type="submit">{check}</button>
      </form>
    </div>
  );
}
