import globe from '../../assets/Globe.png'
export default function Header(){
    return (
        <header>
            <img src={globe} alt='My travel journy'/>
            <span>My travel journal</span>
        </header>
    )
}