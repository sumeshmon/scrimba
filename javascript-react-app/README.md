# Why is React called a library and not a framework?
Because React focuses only on building UI components. It does not include routing, state management, or HTTP handling by default.

React does not provide:
Routing
HTTP client
Global state management
Project structure

# Imperative vs Declarative (Plain Meaning)
Imperative - You tell the computer exact instructions.

Declarative - You describe the final result, and the system handles the steps.

React is declarative because you describe what the UI should look like for a given state, and React handles the DOM updates.

# What is a React component?
A function that returns React elements.

# parent and child componenet+

function Page () {
    return (
        <html></html>
        <Header/> //header function may be out side or seprated components.
    )
}

# Declarativity in React means
You describe what the UI should look like for a given state, and React takes care of how to update the DOM.

# What do props help us accomplish?
Make a component more reusable.

# What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.

# What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements that can be displayed on the page.

# key prop
Keys help React know which item is which when a list changes.

# eventListners
https://react.dev/reference/react-dom/components/common#mouseevent-handler

# What is React state?
data that changes over time and causes the UI to re-render

# You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). What are they?
1. Pass the new version of state that we want to use as the replacement for the old version of state.
2. Pass a callback function. Must return what we want the new value of state to be. Will receive the old version of state as a parameter so we can use it to help determine what we want the new value of state to be.

# When would you want to pass the first option (from answer above) to the state setter function?
Whenever we don't really care about (or need) the old value, we simply want to set a new value.

# When would you want to pass the second option (from answer above) to the state setter function?
When would you want to pass the second option (from answer above) to the state setter function?

# form
https://react.dev/reference/react-dom/components/form#noun-labs-1201738-(2)

# What is FormData?
FormData is a built-in browser API used to collect data from a <form> element.
# radio button
If not selected then the value should be 'null', if didn't add value then the value should be 'on'.
# checkbox
If use .get will receive one value of the first checkbox even if all are checked. Use .getAll, it will return with an array including all values.

# Object.fromEntries()
to grab all the form data

# What is "conditional rendering"?
When we want to only sometimes display something on the page based on some kind of condition.

# When would you use &&?
When you want to either display something or NOT display something.

# When would you use a ternary?
When you need to decide which of 2 things to display

# What if you need to decide between > 2 options on what to display?
if...else if...else conditional or maybe a `switch` statement.