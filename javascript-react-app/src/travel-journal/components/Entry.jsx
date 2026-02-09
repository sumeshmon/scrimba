import country from '../../assets/image.png'
import map from '../../assets/map.png'
export default function Entry(props) {
   console.log(props);
   
   return (
      <div className="travel">
         <div className="travel__image">
            <img src={props.img.src} alt={props.img.alt}/>
         </div>
         <div className='travel__content'>
            <div className='travel__info'>
               <span className='travel__map'>
                  <img src={map} alt="Travel Destination" />
                  {props.country} 
               </span> |
               <a href={props.googleMapsLink}> View on Google Maps</a>
            </div>
            <h2>{props.title}</h2> 
            <span className='date'>{props.date}</span>
            <p className='description'>{props.text}</p>
         </div>
      </div>
   )
} 