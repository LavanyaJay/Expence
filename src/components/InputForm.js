import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function InputForm() {
  const check = <FontAwesomeIcon icon={faCheck} />;
  return (
    <div>
      <select>
        <option value="income" selected>
          +
        </option>
        <option value="expense">-</option>
      </select>
      <input type="text" placeholder="Add description" />
      <input type="number" placeholder="Value" />
      <button>{check}</button>
    </div>
  );
}
