import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, 
        { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

/*
1) Stateful List

Stateful array, stateful list - same thing.

Why did we make usersList a stateful array instead of a regular array?

Because when a new item is added to a stateful array,
the component that holds it is triggered to re-render.
Which means that when a new user is added, App.js will re-render,
and along with itself its child component <UsersList> will re-render as well, 
which means the displayed list of users will update.
And that's what we want - a dynamic list.


2) Concept:  Lifting the State up

When we do bottom-up communication (pass data from child <AddUser> to parent App.js), 
we simultaneously do something that is called "Lifting the State up".
That's because we lift the new state up back to the parent, App.js.

Personally I am not a fan of the name "Lifting the State up"
because it is confusing to me. Since the way I see it is: 

We pass a callback function, which updates the State that is in the parent component, 
from the parent component down to the child component. 
So if we're being precise we actually firstly pass the current state down to the child
just to pass the updated state back up to the parent. 
(The reason the state is first passed down is because with a stateful list
the new state depends on the previous state.)

We need to "lift" the new state up from <AddUser> to App.js so that
when a new user has been added to the stateful list, App.js re-renders,
which means it also re-renders its children, <AddUser> and <UsersList>,
which means the desplayed list is updated.

          App.js 
(parent with stateful array)
          /    \
         /      \
  <AddUser>     <UsersList>
  (child)         (child)


3) Updating a state that depends on a previous state

Reminder:
When we have a stateful list, we can't update it
simply by passing an updated array into the state updating function.

Why? Because when our state depends on a previous state (which it does, when it's a list)
we need to use an alternative form of the state updating function call.
We need to use a function form, where we pass a function to the state updating function
instead of a value. Like so:
    setUsersList((prevState) => {//code that generates newState});

That function we pass will automatically get the latest state snapshot (aka previous state)
via the function's argument when React performs the state update. 
That's why we named the argument prevUsersList.

And then we return the new state snapshot in the body of the function we pass in.


Now, why is this different kind of syntax, this function form necessary?

Let’s remember that React schedules State updates – it doesn’t perform them instantly.
And therefore, theoretically, if we scheduled a lot of state updates at the same time, 
we could be depending on an outdated or incorrect state snapshot if we use the
regular approach of simply passing a new value into the state updating function.

If we use this function-passing approach, React will guarantee that the state snapshot it gives us 
in the inner function will always be the latest state snapshot, keeping all scheduled 
state updates in mind. So this is the safer way to ensure that we always operate on 
the latest state snapshot.


4) Special "key" prop

Explained in comments in UsersList.js

We give a unique id to each user item in the list
so that it can be used as a key prop when the list
is mapped via Array.prototype.map() in UsersList.js

id: Math.random().toString()

*/