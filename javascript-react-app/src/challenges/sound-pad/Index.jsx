import Pad from "./Pad"
import padsData from "./pads"
import React from 'react'

export default function Index(props) {


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
    const [pads, setpads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <Pad
            color={pad.color}
            key={pad.id}
            id={pad.id}
            isOn={pad.on}

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
