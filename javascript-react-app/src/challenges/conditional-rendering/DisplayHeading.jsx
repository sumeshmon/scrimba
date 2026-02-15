import React from "react"

export default function DisplayHeading() {
    const [unreadMessages, setUnreadMessages] = React.useState(['sumesh'])

    /**
     * Challenge 1:
     * Only display the <h1> below if there are unread messages
     */

    /**
    * Challenge 2:
    * If there are 0 unread messages, display a paragraph that says "You
    * have no unread messages". (So, the logic will be the opposite of
    * what we have for the h1)
    */
    return (
        <div>
            {
                unreadMessages.length &&
                <h1>You have {unreadMessages.length} unread messages!</h1>
            }

        </div>
    )
}
