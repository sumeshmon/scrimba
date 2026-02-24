export default function IngredientsList({content, getRecipe }){
    return (
        <>
            <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{content}</ul>
                    {content.length > 3 &&
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={getRecipe}>Get a recipe</button>
                        </div>
                    }
                </section>
        </>
    )
}