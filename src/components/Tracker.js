import React from "react";
import { Table, Alert } from "react-bootstrap";

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
                <tr key={account.id}>
                  <td>{account.desc}</td>
                  {account.type === "exp" && (
                    <td
                      style={{
                        color: account.type === "exp" ? "red" : "none"
                      }}
                    >
                      -{account.amount}€
                    </td>
                  )}
                  {account.type === "inc" && (
                    <td
                      style={{
                        color: account.type === "exp" ? "red" : "none"
                      }}
                    >
                      {parseFloat(account.amount)}€
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}
