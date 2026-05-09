<script>
    let count = $state(0);
    let interval;

    function start() {
        clearInterval(interval);
        interval = setInterval(() => {
			count += 1;
		}, 1000);
    }
    function stop() {
         clearInterval(interval);
    }
</script>

<h2>{count}</h2>
<button on:click={start}>Start</button>
<button on:click={stop}>Stop</button>
