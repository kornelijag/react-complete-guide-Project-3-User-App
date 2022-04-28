import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
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

*/
