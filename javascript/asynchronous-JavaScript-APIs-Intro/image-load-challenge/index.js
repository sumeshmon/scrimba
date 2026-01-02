function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            img.alt = 'scenic image'
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)))
        }, 500)
    })
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-ssadcenic3'
]

async function preloadImages(imageUrlsArr) {
    const imgContainer = document.getElementById('img-container')
    const uploadContainer = document.getElementById('upload-container')
    
    try {
        const promises = imageUrlsArr.map(url => getImagePromise(url))
        const result = await Promise.all(promises)
        uploadContainer.style.display = 'none'

        result.forEach( (img)=>{
            imgContainer.appendChild(img)
        })
        
        console.log('All images loaded successfully!')

        
    } catch (error) {
        console.log(error);
        
    }
    
/*
Challenge:
  1. Create an array of promises using getImagePromise.
  2. Save the results of calling all of those promises 
     in one go to a const 'results'.
  3. If the promises resolve: 
     - log "All images loaded successfully!".
     - hide 'uploadContainer'
     - iterate over the results and render them to imgContainer.
  4. If the promises reject:
     - catch and log the error.
*/
}

document.getElementById('submit-imgs').addEventListener('click', () => preloadImages(images))
