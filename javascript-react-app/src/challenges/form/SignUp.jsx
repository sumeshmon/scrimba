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
    function handleSubmit(formData){
        const email = formData.get("email")
        const passowrd = formData.get("passowrd")
        console.log(passowrd);
        
    }
    return (
        <>
            <section>
                <h1>Signup form</h1>
                <form action={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" placeholder="joe@schmoe.com" className='input'/>
                    <br />
                    <label htmlFor='password'>Password: </label>
                    <input if='password' type='password' name='passowrd' placeholder='Password' className='input'/>
                     <br />
                     <button>Submit</button>

                </form>
            </section>
        </>
    )
}