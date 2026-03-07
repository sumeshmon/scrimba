export default function Die(props) {
    // console.log(prop);
    
    return (
        <>
            <button
                value={props.value}
                style={props.isHeld ? { backgroundColor: "#59E391" } : {}}
                onClick={() => props.hold(props.id)}
            >
                {props.value}
            </button>
        </>
    )
}