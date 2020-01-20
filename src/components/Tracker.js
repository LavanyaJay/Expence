import React from "react";
import { Table, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Tracker(props) {
  //console.log("props:", props);
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
                <tr key={account.id}>
                  {/* <td>{account.category.ac_category}</td> */}
                  <td>{account.ac_remark}</td>

                  <td>{parseFloat(account.ac_amount)}€</td>

                  <td>
                    <button
                      value={account.id}
                      onClick={() => props.onDelete(account.id)}
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
