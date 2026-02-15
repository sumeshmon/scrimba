import React from "react";
export default function Jokes(props) {
    // console.log(props);
    /**
        * Challenge 2:
        * - Create state `isShown` (boolean, default to `false`)
        * - Add a button that toggles the value back and forth
        */

    /**
   * Challenge 3:
   * Only display the punchline paragraph if `isShown` is true
   */
    const [isShown, setIsShown] = React.useState(false)
    function handlShow() {
        setIsShown(prevState => !prevState)
    }
    return (
        <>
            <div className="joke">
                {props.setup && <div className="joke-title"><b>Setup:</b> {props.setup}</div>}
                {isShown 
                    ?<div className="joke-title"><b>Punchline:</b> {props.punchline} </div>
                : null}
                <br/>
                <button onClick={handlShow}>{isShown ? 'Hide' : 'Show'} punchline</button>
            </div>

        </>
    )
}
