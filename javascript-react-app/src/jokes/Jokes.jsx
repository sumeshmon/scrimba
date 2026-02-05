export default function Jokes(props) {
    console.log(props);
    
    return (
        <>
            <div className="joke">            
                {props.setup && <div className="joke-title"><b>Setup:</b> {props.setup}</div>}
                <div className="joke-title"><b>Punchline:</b> {props.punchline}</div>
            </div>

        </> 
    )
}
