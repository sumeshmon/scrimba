import React from 'react'
export default function Pad(props) {
    // console.log(props);
    /**
 * Challenge 0: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 */
    // const [on, setOn] = React.useState(props.on)
    // console.log(on);
    
    // function toggle (){
    //     setOn ( prevOn => !prevOn)
    // }
    return (
        <> 
            <button
                style={{ backgroundColor: props.color }}
                className={props.isOn ? "on" : undefined}
                onClick = {()=>props.toggle(props.id)}
            >
            </button>
        </>
    )
}