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
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )

    const ingredientsListItems = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })


    function addIngredient(FormData) {
        let newIngredient = FormData.get('ingredient')
        // console.log(2, formData.get("ingredient"));
        setIngredients(prevItem => [
            ...prevItem,
            newIngredient
        ]);
        // console.log(newIngredient);

    }
    /**
    * Challenge 4:
    * Using conditional rendering, only render the new <section> IF
    * there are ingredients added to the list of ingredients.
    */

    /**
    * Challenge 5:
    * Only display the div.get-recipe-container if the ingredients list
    * has more than 3 items in it. (Fewer than that and it might not
    * give great results from the chef 🤖👩‍🍳)
    */

    /**
        * Challenge 6:
        * 1. Create a boolean state that, for now, will represent whether
        *    we've gotten a recipe back from the "chef". Default to `false`.
        *    Can call it `recipeShown`.
        * 2. Grab the markup in recipeCode.md and paste it below. This will
        *    be a placeholder for the content that will come back from the 
        *    chef once we set up that feature.
        * 3. When the user clicks the "Get a recipe" button, flip the
        *    `recipeShown` state to true.
        * 4. Only display the recipe code content if `recipeShown` is true.
        */
    const [recipeShown, setrecipeShown] = React.useState(false)
    function handleClickRecipe() {
       setrecipeShown( recipeShown => !recipeShown )
    }
    return (
        <main className='chef-main'>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                    {ingredients.length > 3 &&
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={handleClickRecipe}>Get a recipe</button>
                        </div>
                    }

                </section>
            }
            {recipeShown && 
                <h2>asdad</h2>          
            }
            
        </main>
    )
} 