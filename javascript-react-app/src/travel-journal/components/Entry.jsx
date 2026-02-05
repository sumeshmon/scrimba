import country from '../../assets/image.png'
import map from '../../assets/map.png'
export default function Entry({
   img,
   location,
   link,
   place,
   date,
   description
}) {

   return (
      <div className="travel">
         <div className="travel__image">
            <img src={img.src} alt={img.alt} />
         </div>
         <div className='travel__content'>
            <div className='travel__info'>
               <span className='travel__map'>
                  <img src={map} alt="Travel Destination" />
                  {place} 
               </span> |
               <a href={link}> View on Google Maps</a>
            </div>
            <h2>{location}</h2>
            <span className='date'>{date}</span>
            <p className='description'>{description}</p>
         </div>
      </div>
   )
} 