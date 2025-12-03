function userName (name){
    if (name){
        console.log(name);
        
    } else {
        console.log('I am exicuted');        
        throw new Error ('Please pass username')
        // if use throw it will terminate executing
        console.log('I am not exicuted');
    }
}

userName('')
