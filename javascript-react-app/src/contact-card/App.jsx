import Contact from "./Contact";
import imagePlaceholder from '../assets/image.png'
export default function App() {    
    return (
        <>
            <div className="contacts">
                <Contact 
                    image={imagePlaceholder}
                    name='Mr. Whiskerson'
                    phone= '986465555'
                    email='mr.whiskaz@catnap.meow'

                />
               <Contact 
                    image={imagePlaceholder}
                    name='Mr. asdasd'
                    phone= '222'
                    email='test@test.com' 

                />
            </div>
        </>
    )
}