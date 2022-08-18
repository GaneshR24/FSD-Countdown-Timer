countDown (10, "status");

function countDown (sec, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "Countdown "+sec+"";
    if (sec < 1) {
        clearTimeout (timer);
        element.innerHTML = '<h1>Happy Independence Day</h1>';
    } 
    sec --;
    var timer = setTimeout('countDown('+sec+', "'+elem+'")', 1000);
}
