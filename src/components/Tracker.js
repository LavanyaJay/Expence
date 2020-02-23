import React from "react";
import { Table, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Tracker(props) {
  return (
    <div>
      {props.accounts.length < 1 && (
        <div>
          <Alert variant="info">
            No Accounts for this date <br />
          </Alert>
        </div>
      )}
      {props.accounts.length > 0 && (
        <Table hover className="table">
          <tbody>
            {props.accounts.map(account => {
              return (
                <tr
                  key={account.acc_id}
                  className={
                    account.category_id === 1
                      ? "table-primary"
                      : account.category_id === 2
                      ? "table-info"
                      : account.category_id === 3
                      ? "table-light"
                      : account.category_id === 4
                      ? "table-danger"
                      : account.category_id === 5
                      ? "table-success"
                      : false
                  }
                >
                  {/* <td>{account.category.ac_category}</td> */}
                  <td>{account.acc_ac_remark}</td>

                  <td>{parseFloat(account.acc_ac_amount)}€</td>

                  <td>
                    <button
                      value={account.acc_id}
                      onClick={() => props.onDelete(account.acc_id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}
