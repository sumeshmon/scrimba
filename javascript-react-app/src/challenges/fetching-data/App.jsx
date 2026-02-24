import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    console.log("Rendered!")
     /**
     * Challenge part 2:
     * Combine the "count" state with the request URL
     * so that pressing the "Get next character" button
     * will get a new character from the Star Wars API.
     * Remember to consider the dependencies array!
     */
    function addCount (){
       setCount (preCount => preCount + 1)
    }
    React.useEffect(() => {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [])
    
    return (
        <div>
            <h2 className="text-white">The count is {count}</h2>
            <button onClick={addCount}>Get next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}