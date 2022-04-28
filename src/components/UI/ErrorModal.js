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
Choosing where to render the ErrorModal

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
