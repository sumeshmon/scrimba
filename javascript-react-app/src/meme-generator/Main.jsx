import React from "react"
export default function Main() {
    /**
        * Challenge 1: move the hardcoded meme info into React
        * state. Use an object with `topText`, `bottomText`,
        * and `imageUrl` properties, and set the initial values to
        * the ones hardcoded below.
    */

    /**
        * Challenge 2: update the topText value in the meme state
        * object every time the topText input box is changed
        * 
        * Note: don't worry about bottomText at this point.
    */
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    })
    /**
    * Challenge 4: Get a random image from the array of
    * allMemes when the user clicks the button. Once
    * you've gotten a random image from the array, make
    * sure to write the code that will display that
    * random meme image to the page.
    */
    function generateImage() {
        if (meme.length === 0) return
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))

    }

    function handleChange(event) {
        // console.log(event.currentTarget);        
        const { name, value } = event.currentTarget
        // console.log(name, value);
        setMeme(preMeme => ({
            ...preMeme,
            [name]: value
        }))
    }
    /**
    * Challenge 3:
    * Get an array of memes from the imgflip API as soon as
    * this component renders for the first time.
    * Check the imgflip documentation for the correct URL.
    * Save the array of memes (not the whole response
    * data) to state. (For this app, we'll randomly choose
    * one of the memes from this array when the user clicks
    * the "Get a new meme image" button, but we'll do that in
    * a separate challenge.)
    * 
    * Hint: for now, don't try to use an async/await function.
    * Instead, use `.then()` to resolve the promises
    * from using `fetch`. We'll learn why after this challenge.
    */


    const [allMemes, setAllMemes] = React.useState([])
    const [randomImage, setRandomImage] = React.useState("")
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    return (

        <main className="meme-main">
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={generateImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}