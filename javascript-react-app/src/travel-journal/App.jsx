import Entry from "./components/Entry"
import Header from "./components/Header"

export default function App() {
    const today = new Date().toISOString().split("T")[0];
    const reversed = today.split("-").reverse().join("-");
    return (
        <>
            <Header />
            <Entry
                place='Japan'
                date={reversed}
                location='Mount Fuji'
                description='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
                link='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu' className='location-link'
                img={{
                    src: "https://scrimba.com/links/travel-journal-japan-image-url",
                    alt: "Mount Fuji"
                }}
            />
        </>
    )
}
