import React, {useState} from "react";

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
}


  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

/*
Notes:

1) htmlFor and id attributes:

htmlFor is the JSX alternative of the "for" attribute in HTML.
"for" in HTML is an attribute used with the label tag
to indicate which input element the label is for.

This goes together with the id attribute on an input elemement like so:
<label htmlFor="idOfInputElement"></label>
<input id="idOfInputElement"/>

We don't have to set these attributes, but it is good for accessibility
reasons. For example, for screen readers to understand 
which label belongs to which input.


2) event.preventDefault();

For submitting a form, intuituively we'd think 
of adding an onClick event listener property on the button 
meant to submit the form.
But we don't do that because there is a default behavior in the browser
for form submittion events that is implemented by adding an onSubmit 
event listener property on the <form> itself and by adding type="submit"
on the <button> meant to submit it.

Unfortunately, a part of this default behavior is a request being sent
to the web app's hosting server (in this case the development server),
which makes the page reload.
We don't need this so we prevent it.

3) className on custom component <Card>:

We don't have to call this property className,
but we are choosing to, because that's also what's used
on built-in components like <div>.

4) State:

To use a concept called State we need to import and use the React hook useState().
It is one of the most important and commonly used hooks in React.

-Why do we want to use this concept?
useState() allows React to run the component function again when it needs to.
We mainly need that to have a dynamic UI, where an event makes changes to the screen.

-How does it work and what does it consist of?

When we call useState() we need to pass in an initial value called default state value 
as an argument. The reason is because behind the scenes useState creates a special variable
that needs an initial value. 

It is special because changes to it lead to the component function being called again.
We can't access this special variable directly, but React provides us with a pointer to it
to use its value, and with a special function to make changes to it.

The special function does not only change the value of the special variable. It also
triggers a re-render cycle by making the component function execute again, 
so that the UI is updated.

Calling useState() always returns an array of exactly two elements:
1) a pointer to the special variable (the value it holds)
also referred to as the current state snapshot;
2) a state updating function.
That is why we use array destructuring to save them like so:
const [varName, funcName] = useState('initial value');
The common naming conventions are like so:
const [var, setVar] = useState('initial value');

5) Event object:

An event object describes an event that occurred.

In React an event handler function receives a default event object 
as an argument from the browser when our event is triggered, 
and then the handler function uses the received event object 
to store information about the event.
In order for a handler function to receive it we simply need to
add it as an argument like so:

const eventHandlerFn = (event) => {
      console.log(event);
  }

To see what's inside this object we can simply log it as done above.

We can inspect specific information by using the dot syntax
to access specific properties of the event object.
We can see all of its properties when we expand the logged 
event object. We will see it called SyntheticBaseEvent in the log.


What stored information might we specifically
be interested in?

We can use the event object to receive input from the user.
For example, to take the value that was entered by the user into 
an input field (the <input> element).

For that we have to have an event listener property such as onChange, onInput, onClick, etc. 
on the element that receives the input (such as <input>), and have it set to a pointer to an event handler function.
The handler function must have an event argument to receive the event object from the browser
when the event fires.
Then we can access the input value by going event.target.value

The target property points at the DOM element on which we are listening for the event.
Reminder: we listen to events via event listener properties that start with 'on',
such as onClick, onChange, etc.
So if the listener is on an <input> element, the the target refers to that particular <input> element.

Depending on what the DOM element is, the target object might contain
different properties that we can inspect by expanding the target in the log.
But for elements that accept input we typically just want the value property.

*/
