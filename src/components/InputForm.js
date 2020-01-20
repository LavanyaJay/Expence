import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function InputForm(props) {
  const check = <FontAwesomeIcon icon={faCheck} />;
  return (
    <div>
      <form onSubmit={props.onSubmit} className="form">
        <select
          className="desc"
          name="category"
          onChange={props.onChange}
          placeholder="Select description"
          value={props.values.category}
          required
        >
          <option></option>
          {props.category.map((cat, id) => (
            <option value={cat.id} key={id}>
              {cat.ac_category}
            </option>
          ))}
        </select>
        <input
          name="remark"
          type="text"
          className="desc"
          onChange={props.onChange}
          placeholder="Add remark"
          value={props.values.remark}
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
