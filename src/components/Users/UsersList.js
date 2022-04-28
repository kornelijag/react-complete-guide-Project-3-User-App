// This component is for outputting user data
/* It receives an array of users through props and then 
   outputs an HTML-like (JSX) list of users
*/
import React from "react";

import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

/*
1) Be aware of such error:
"TypeError: Cannot read properties of undefined (reading 'map')"

The map() method is built-in into every array in JS.
If it doesn't work, then perhaps it's not being called on an array.
Let's take a look at the array it is called on.

users in props.users.map() is supposed to be an array
that is passed through props.
However, if we don't pass anything then users is rightfully undefined.
undefined is a data type in JS and it does not have a map() method,
so the error makes sense.

Solution: pass an array into users prop, like so:
<UsersList users={userArrayName} />

If we don't have an array yet, we can just pass an empty array
like so:
<UsersList users={[]} />
And that is enough to avoid the error.

With that we don't see a list, 
but at least we see the card where the list will eventually be rendered.


2) Special "key" prop

If we don't have a key prop for each list item, 
we will get this error:
'Warning: Each child in a list should have a unique "key" prop.'

Reminder from 2nd module:
We should always set a built-in key prop to a unique value 
for each item (element) in the list (array) when using the Array.prorotype.map() method.

The reason is performance. Without this React simply adds newly added items 
at the end of the array even if we want them at the beginning and then it goes 
item by item overwriting the contents of each so that the new item does end up 
at the beginning to match the order of our array. 
That‘s not good performance.

Not using a key can also lead to bugs if the elements are stafeul items
because the state of a particular item can get overwritten.

user.id is a unique value set in App.js:
const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, 
        { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

*/
