import Jokes from "./Jokes";
import JokesData from "./JokesData";
/**
 * Challenge: Think critically - how would you pass in a prop that 
 * isn't a string datatype.
 * 
 * E.g. Say you want each Joke component to receive an "upvotes" 
 * and "downvotes" prop that is a number, as well as a prop with 
 * an array of comments, and a boolean of whether the joke is a 
 * pun (`isPun`).
 */

export default function App() {
    /**
     * Challenge: See if you can correctly pass the necessary props to the 
     * Joke component in the .map() (and render the jokeElements array) so 
     * the jokes show up on the page again
     */
    const jokeElements = JokesData.map((joke) => {
            return <Jokes 
                setup = {joke.setup}
                punchline = {joke.punchline}
            />
    })
    return ( 
        <>
            <main>
                {jokeElements}
            </main>
        </>
    )
} 