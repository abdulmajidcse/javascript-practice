let w = new Worker('./show-time.js');
w.onmessage = function(event) {
    document.getElementById('text').innerHTML = event.data;
};