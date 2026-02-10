export default function addEventListener() {
    function clickMe() {
        console.log('clicked');
    }
    function enterMouse() {
        console.log('Mouse entered');
    }
    function overMouse() {
        console.log('Mouse overed');
    }
    return (
        <>
            <button onClick={clickMe}>Add ingredient</button>
            <h2 onMouseEnter={enterMouse}>onMouseEnter</h2>
            <p onMouseOver={overMouse}>onMouseOver</p>
        </>
    )
}