import Entry from "./components/Entry"
import Header from "./components/Header"
import JournalData from "./JournalData.js"
export default function App() {
    /**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */
    const today = new Date().toISOString().split("T")[0];
    const reversed = today.split("-").reverse().join("-");
    const data = JournalData.map((data) => {
        
        return (
            <Entry
                key={data.id} 
               {...data}
            />
        )

    })
    return (
        <>
            <Header />
            {data}
        </>
    )
}
