import React from "react";
import styled from "styled-components";
export default function Button(props) {
  const Button = styled.button`
    height: 3rem;
    border-radius: 1px;
    width: 8rem;
    color: palevioletred;
  `;
  return <Button onClick={props.onClick}>Submit</Button>;
}
