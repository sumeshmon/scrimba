(function(){
    const theme = localStorage.getItem('theme')
     if (theme) {
        console.log(theme)
    } else {
        console.log('light')
    }
}())  

