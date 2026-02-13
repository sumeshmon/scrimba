import React from 'react';
import ReactDOM from 'react-dom/client';

export default function SignUp() {
    // normal
    // function handleSubmit(){
    //     event.preventDefault()
    //     const formEle = event.currentTarget
    //     const formData = new FormData(formEle)
    //     const email = formData.get("email")
    //     const passowrd = formData.get("passowrd")
    //     formEle.reset()
    // }
    function handleSubmit(formData) {
        // const email = formData.get("email")
        // const passowrd = formData.get("passowrd")
        // const description = formData.get('description')
        // const employmentStatus = formData.get('employmentStatus')
        // const dietaryRestrictions = formData.getAll('dietaryRestrictions')
        // const favColor = formData.get('favColor')
        // console.log(favColor);

        // simple way to grab all thwe data using Object.fromEntries()
        const data  = Object.fromEntries(formData)
        const dietaryData = formData.getAll('dietaryRestrictions')
        const allData = {
            ...data, dietaryData
        }
        console.log(allData);
        

    }   
    return (
        <>
            <section className='form'>
                <h1>Signup form</h1>
                <form action={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" defaultValue="joe@schmoe.com" className='input' />
                    <br />
                    <label htmlFor='password'>Password: </label>
                    <input if='password' type='password' name='passowrd' placeholder='Password' className='input' />
                    <br />
                    <label htmlFor='description'></label>
                    <textarea id='description' name='description'></textarea>
                    <br />

                    <fieldset>
                        <legend>Employment Status:</legend>
                        <label>
                            <input type="radio" name="employmentStatus" value="unemployed" />
                            Unemployed
                        </label>
                        <label>
                            <input type="radio" name="employmentStatus" value="part-time" />
                            Part-time
                        </label>
                        <label>
                            <input type="radio" name="employmentStatus" value="full-time" defaultChecked={true} />
                            Full-time
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Dietary restrictions:</legend>
                        <label>
                            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                            Kosher
                        </label>
                        <label>
                            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                            Vegan
                        </label>
                        <label>
                            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                            Gluten-free
                        </label>
                    </fieldset>
                    <br />
                    <label htmlFor="favColor">What is your favorite color?</label>
                    <select id="favColor" name="favColor" defaultValue="green">
                        <option value="" disabled>-- Choose a color --</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>
                    <br />
                    <button>Submit</button>

                </form>
            </section >
        </>
    )
}