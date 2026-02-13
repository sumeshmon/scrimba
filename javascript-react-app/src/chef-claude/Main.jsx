import React from 'react'
export default function Main() {

    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */

    /**
     * Challenge 1:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */

    /**
    * Challenge 2:
    * Add the new ingredient to the array of ingredients. Also, add a 
    * console.log(ingredients) after adding the ingredient, because 
    * **warning**: you aren't going to see the page update!
    * 
    * Hint: this is a one-liner solution, so don't overthink it 😅
    */

    /** 
     * Challenge 3: Update our app so that when the user enters a
     * new ingredient and submits the form, it adds that new
     * ingredient to our list!
     */
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })


    function handleSubmit(FormData) {    
        const newIngredient = FormData.get('ingredient')
        // console.log(2, formData.get("ingredient"));
        setIngredients(prevItem => [
            ...prevItem,
            newIngredient
        ]);
        // console.log(newIngredient);
        

    }
    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
} 