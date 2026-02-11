import React from "react"

export default function App() {
    /**
     * Challenge 1: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    const [count, setCount] = React.useState(0)

    /**
     * Challenge 2: 
     * Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     */
    // function add(){
    //     setCount(count + 1)
    // }
    // using callback function above
    function add(){
       setCount (function (prevCount ){
        return prevCount + 1
       })
    }

    /**
     * Challenge 3: 
     * Add functionality to the minus button
     */
    // function subtract(){ 
    //     setCount(count - 1)
    // }
     // using callback with arrow function above.
     function subtract(){
        setCount (prevCount => prevCount - 1)
     }

    return (
        <main className="container">
            <h3>How many times will Bob say "state" in this section?</h3>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={subtract}>–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={add}>+</button>
            </div>
        </main>
    )
}
