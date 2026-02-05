export default function SurroundingHtagArray() {
    /**
     * Challenge: manually turn this string array into an array of
     * JSX elements by surrounding each ninja turtle with an <h2> element
     */
    const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
    return (
        <main>
            {ninjaTurtles.map(name => <h2>{name}</h2>)}
        </main>  
    )

}