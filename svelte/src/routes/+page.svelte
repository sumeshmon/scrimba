<script>
    :$ let count = 0
    let intervalId = null

function start(){
    intervalId = setInterval ( function(){
        count ++
    }, 500)
}

function stop(){
    clearInterval(intervalId)
}
      
</script>
    <h2>{count}</h2>
    <button onclick={start}>Start</button>
    <button onclick={stop}>Stop</button>