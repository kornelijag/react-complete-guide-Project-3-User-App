import React from 'react';

import classes from './Card.module.css';

const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;

/*
1) Importing a CSS module:

If we were importing a simple CSS file then this would be correct:
import './Card.css';

But for a module.css file we need to import an object from it
that will contain CSS classes. 
We can name the object anything, for example "classes", like so:
import classes from './Card.module.css';

2) Reminder about custom wrapper components like <Card>

<Card> is our custom wrapper component.
Since it's a custom component created by us and not a built-in 
HTML-like component that already came with JSX like <div>, <form>, <label>
<input>, etc., it only understands properties that we define inside 
of the component itself (inside of Card.js).

A <div> component would understand a className property by default
since built-in components are preconfigured to understand 
the className prop and to apply the given CSS class
to the underlying rendered HTML node, whereas a custom component 
like <Card> wouldn't know what to do with it.

For the className property to work on <Card>, we need to go to 
Card.js and "accept" the incoming className prop and do something 
with it by using props.className inside Card.js.

3) Reminder about strings in backticks (template literals):

A string inside of backticks `` is called a template literal.
Backticks `` allow us to both write literal strings and 
create dynamic strings by inserting variables and other dynamic values 
and expressions inside of placeholders ${}. Kind of like we use 
the placeholder {} to insert dynamic values in React.

"Template literals are sometimes informally called template strings, 
because they are used most commonly for string interpolation 
(to create strings by doing substitution of placeholders)."

Other benefits of template literals is easier multi-line strings
and special constructs called tagged templates.

*/