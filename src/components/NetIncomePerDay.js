import React from "react";
import { Card } from "react-bootstrap";
export default function NetIncomePerDay(props) {
  return (
    <div>
      <Card className="card">
        <Card.Header>Date: {props.date.format("DD-MM-YYYY")}</Card.Header>
        <Card.Body>
          <Card.Title text="muted">
            Income: {parseFloat(props.totalInc)}{" "}
          </Card.Title>
          <Card.Title text="muted">
            Expense:{parseFloat(props.totalExp)}{" "}
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          Net:{parseFloat(props.totalInc - props.totalExp)}
        </Card.Footer>
      </Card>
    </div>
  );
}
