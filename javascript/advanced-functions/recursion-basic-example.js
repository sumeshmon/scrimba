function countdown (count){
    console.log(count);
    
    if( count <=0){
        return count
    }
    countdown(count - 1)
}
countdown(5)