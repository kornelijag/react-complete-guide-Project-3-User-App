import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

/*
1) Backdrop for the modal

What is a backdrop?
Upon googling, I didn't really understand what it is.

@6:50 video "Adding the ErrorModal Component" 18%
Tutorial author describes what a backdrop is:

A backdrop is an overlay between the modal overlay
and the actual main page, so that we can't interact with the rest
of the main page when the modal is displayed.
For example, so that we couldn't click the form submit button while
the error is being shown in the modal.

To add the backdrop we use this:
<div className={classes.backdrop} />
The div itself is empty, but the backdrop CSS class
makes sure that we have this gray-ish black transparent-ish
background behind the modal: rgba(0, 0, 0, 0.75)

QUESTION! I'm a bit confused as to how simply setting a background color
makes it impossible to interact with the main page,
as the tutorial author doesn't really explain this.


2) Choosing where to render the ErrorModal

Now the question is, where is it best render
this ErrorModal component? Inside of which component?

This can actually be argued.

It would make sense to have it render inside of AddUser.js
because ultimately the AddUser component will trigger the
ErrorModal. If user input is wrong, the ErrorModal will be
shown to display an error message.

Then again, it can also be argued that the ErrorModal is a general 
overaly over the entire UI and therefore logically, 
it should be rendered as high as possible in the component tree,
so for example in the App.js component.

But we will go with rendering it where
it's actually being triggered, which is in AddUser.js

P.S. Tutorial author said it's ok to render it elsewhere
but we have to keep in mind that we will then have to
update our state management accordingly.


3) Error State management

We need a separate State for error display
for our program to know when to show the ErrorModal.

Where?

The State should be in the same component that we render
the ErrorModal, and as we've decided it will be in AddUser.js.

What values?

The error State can be a string - like the error message,
or it could be an object which bundles the error title and error message,
anything we want.

But basically we need the Error State to have two possible states:
 - "We have an error", in which case the ErrorModal is rendered;
 - "We don't have an error", in which case the ErrorModal isn't rendered.

The tutorial author is going to use objects for the state values,
so I'm following that.


4) Dismissing the ErrorModal

Now, we also want to make it possible to dismiss the ErrorModal
by either clicking on the "Okay" button or by clicking on the backdrop.

For that we need to clear our error State in AddUser.js
since the AddUser JSX logic checks whether the value of the error State
is truthy, and if it is, then displays the ErrorModal:
{error && <ErrorModal title={error.title} message={error.message} />}

So the only way of getting rid of the ErrorModal is to re-set the
error to undefined like it initialy is, or to null, or any other falsy value.

So we create this function in AddUser.js:

 const errorHandler = () => {
    setError(null);
  };

And we pass a pointer to it to the ErrorModal through a prop:
{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

Then here in ErrorModal.js 
we add an onClick prop to both the custom <Button> and the <div> that acts as the backdrop.
Reminder: the onClick prop is a built-in prop on every HTML-like element in JSX, 
not just on <button>.

*/
