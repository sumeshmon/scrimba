import React from "react"

export default function UseState() {
    const testReactState = React.useState()
    //console.log(testReactState); // undifined

    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */

    let [result, func] = React.useState("Hello")
    // console.log(result, func)

    const [state, setState] = React.useState("Sumesh")
    function testState() {
        setState("Sali") 
        
    }

    return (
        <main>
            <div>{state}</div>
            <h4 className="title">Is state important to know?</h4>
            <button className="value" onClick={testState}>{result}</button>
        </main>
    )
}

