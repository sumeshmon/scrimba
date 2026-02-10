export default function SurroundingHtagArray() {
    /**
     * Challenge: manually turn this string array into an array of
     * JSX elements by surrounding each ninja turtle with an <h2> element
     */
    const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
    const ninjaTurtlesItems = ninjaTurtles.map(name => <h3 key={name}>{name}</h3>)
    return (
        <main>
            {ninjaTurtlesItems}
        </main>  
    )

}