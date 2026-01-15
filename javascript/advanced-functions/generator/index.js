const slidesArr = [
    "1. Intro Slide",
    "2. The current situation",
    "3. Setbacks",
    "SLIDE MALFUNCTION",
    "4. Plans",
    "5. A Positive Future"
]
function* generator (arr){
    for (const item of arr) {
       if (item === 'SLIDE MALFUNCTION') {
            return
        } else {
            yield item
        }
    }
}
const slideGenerator = generator(slidesArr)
document.getElementById('nextSlideBtn').addEventListener('click', () => {
    const result = slideGenerator.next() 
    if(!result.done){
        console.log(result);
    } else {
        console.log('Slides are completed');
        
    }
    
    
}) 