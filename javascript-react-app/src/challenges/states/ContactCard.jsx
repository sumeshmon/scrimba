import React from "react"
import avatar from "../../assets/user.png"
import starFilled from "../../assets/star-filled.png"
import starEmpty from "../../assets/star-empty.png"
import Star from "./components/Star"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    // console.log(contact); 

    /**
     * Challenge 1: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */


    /**
     * Challenge 2: Use a ternary to determine which star image variable
     * should be used based on the `contact.isFavorite` property. Test 
     * your results by manually changing the isFavorite value in state.
     * 
     * `true` => starFilled
     * `false` => starEmpty
     */

    /**
     * Challenge 3:
     * Update the following:
     * - aria-pressed should reflect the same value as contact.isFavorite.
     * - aria-label should switch to say "Remove from favorites" if
     *   contact.isFavorite is `true`.
     * - img alt should say "filled star icon" when it is filled.
     */

    /**
     * Challenge 4: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display. (You'll
     *   need to import the 2 star icons into that new component first).
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

    function toggleFavorite() {
            setContact(prevContact => {
                return {
                    ...prevContact,
                    isFavorite: !prevContact.isFavorite
                }
            })
        }
    

    return (
        <main className="contact-card">
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Star isFilled={contact.isFavorite} customComponentClick={toggleFavorite}/>

                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
