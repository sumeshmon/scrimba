import Pad from "./Pad"
import padsData from "./pads"
import React from 'react'

export default function Index() {


    /**
     * Challenge part 0:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */

    /**
     * Challenge 1: use a ternary to determine the backgroundColor
     * of the buttons
     * If darkMode is true, set them to "#222222"
     * If darkMode is false, set them to "#cccccc"
     */

    /**
     * Challenge part 2:
     * 1. Create a separate component called "Pad" and
     *    replace the `button` above with our <Pad /> component
     * 2. Pass the Pad component a prop called `color` with the
     *    value of the same name from the `padsData` objects
     * 3. In the Pad component, apply an inline style to the <button>
     *    to set the backgroundColor of the button.
     * 
     * (We'll deal with the "on" property soon)
     */

    /**
     * Challenge part 3:
     * Our buttons got turned off by default! Update the code
     * so if the button is "on", it has the className of "on".
     */

    /**
     * Challenge 4: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Pad components
     * and set it up so when they get clicked, the function runs
     */

    /**
        * Challenge 5:
        * Call setPads to update the state of the one pad that was
        * clicked. Map over the previous pads array, and if the current
        * item you're iterating over has the same id as the `id` passed
        * to this function, then return a new object with the `on` value
        * set to the opposite of what it was before.
        * Otherwise (if the ids don't match), just return the previous
        * item as it was, unchanged.
        */
    const [pads, setPads] = React.useState(padsData)
    function toggle(id){
        setPads ( prev => prev.map( item=>{
            return item.id === id ? {...item, on: !item.on} : item
        }))
        
    }
    const buttonElements = pads.map(pad => (
        <Pad
            color={pad.color}
            key={pad.id}
            id={pad.id}
            isOn={pad.on}
            toggle={toggle}

        />
    ))
    return (
        <main className="sound-pad">
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
