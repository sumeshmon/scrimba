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