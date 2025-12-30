const image = new Image()
// image.src = "http://..."
image.src = 'https://placehold.co/600x400/EEE/31343C'

image.addEventListener('load', () => {
    console.log('loaded');
})
image.addEventListener('error', ()=>{
    console.log('not loaded');
    
})

/*
Challenge:
1. Create two event listeners. One should listen 
   out for the image loading and log “Image has 
   loaded”. The other should listen for an error 
   and log “Image has NOT loaded”.
*/
