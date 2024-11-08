import React from "react";
import { Button } from "react-bootstrap";
import { bool, func, node,string, } from "prop-types";

export default function QuizButton({ id, variant, onClick, children,className,disabled }) {
    return (
      <div className={className}>
      <Button id={id} variant={variant} onClick={onClick} disabled={disabled}>
        {children}
      </Button></div>
    );
  }
  QuizButton.propTypes = {
    id: string.isRequired,
    variant: string,
    onClick: func.isRequired,
    children: node.isRequired,
    className: string,
    disabled : bool
  };