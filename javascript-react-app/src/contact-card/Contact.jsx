import image from '../assets/dummy.png'
import emailIcon from '../assets/email.png'
import phoneIcon from '../assets/phone.png'
export default function ContactCard() {
    return (
       
            <article className="contact-card">
                <img
                    src={image}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img
                        src={phoneIcon}
                        alt="phone icon"
                    />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img
                        src={emailIcon}
                        alt="mail icon"
                    />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </article>
    )
}