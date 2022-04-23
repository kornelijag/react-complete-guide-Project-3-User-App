import React, {useState} from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;

/*

1. Why is a custom <Button> component necessary when there is a built-in 
<button> component?

This is basically a wrapper component for a built-in button component
since we want a pre-styled button component.

Still we want to make our custom Button component basically usable like the built-in <button> component,
and that's why we use the same props that a <button> component would:

1) className - for styling
2) type - for declaring type of the button; there are 3 types: button, submit, reset
3) onClick - for passing pointer to handler function
4) props.children - for passing button text


2. Reminder about logical operators:

In JS, logical operators have more functionalities than in classical programming.
They're not only used in IF statements to create conditional content.

To make content conditional they can also be used in value assignment statements:
for example: result = value1 || value2 || value3;

How this works:
Operands are evaluated from left to right.
Each operand is converted to to a boolean (true or false).
Reminder about type conversions in JS:
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true. 
(The string "0" does not equal to false though because it's not an empty string.
Only empty strings equal to false.)

OR "||" finds the first truthy value. If not, it returns the last value.
AND “&&” finds the first falsy value. If not, it returns the last value.

This kind of conditional logic works great in this situation:
type={props.type || "button"}
Since we are not sure if anything is passed to props.type. If not, then props.type is empty,
and thus false, and since OR returns the first truthy value, "button" will be returned
(since it's not an empty string, and thus is truthy).


*/
