/**
 * Challenge: Fix the code below to use the `props`
 * object values in place of the hardcoded values below
 * 
 * Note: There will be a small bug in the code, so do your
 * best to squash it! 🐛
 */
import phoneIcon from '../assets/phone.png'
import emailIcon from '../assets/email.png'
export default function Contact(props) {
    console.log(typeof props)
    const {image, name, phone, email} = props
    return (
        <article className="contact-card">
            <img
                src={image}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src={phoneIcon}
                    alt="phone icon"
                />
                <p>{phone}</p> 
            </div> 
            <div className="info-group">
                <img
                     src={emailIcon}
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}
