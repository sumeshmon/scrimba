import Jokes from "./Jokes";
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
    return (
        <>
            <Jokes
                punchline="I can't wait to see her face light up when she opens it."
                upvotes={20}
                isPun={true}
                comments={[
                    { auther: 'Sumesh', title: 'My title' }
                ]}
            />
            <Jokes
                setup='How did the hacker escape the police?'
                punchline="He just ransomware!"
                upvotes={10}
                isPun={true}
            />
            <Jokes
                setup='How did the hacker escape the police?'
                punchline="He just ransomware!"
                upvotes={203}
                isPun={false}
            />
        </>
    )
} 