import React  from "react";
export default function Jokes(props) {
    // console.log(props);
     /**
         * Challenge 2:
         * - Create state `isShown` (boolean, default to `false`)
         * - Add a button that toggles the value back and forth
         */
       
     const [isShown, setIsShown] = React.useState(false)
        function handlShow(){
            setIsShown ( prevState => !prevState)
        }
    return (
        <>
            <div className="joke">            
                {props.setup && <div className="joke-title"><b>Setup:</b> {props.setup}</div>}
                <div className="joke-title"><b>Punchline:</b> {props.punchline}</div>
                <button onClick={handlShow}>{isShown ? 'Show' : 'hide'}</button>
            </div>

        </> 
    )
}
