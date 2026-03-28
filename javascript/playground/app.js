const root = document.getElementById('root')

let count = 0

function start(){
    intervalId = setInterval ( function(){
        root.textContent = count ++
    }, 500)
}

function stop(){
    clearInterval(intervalId)
}