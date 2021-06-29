let cnm = document.getElementById('contactermoi');
cnm.style.color = 'black'
function colorlink(){
    cnm.style.color = 'red'
}
function colorlinkOut(){
    cnm.style.color = 'black'
}

cnm.onmouseover = function() {colorlink()}
cnm.onmouseout = function() {colorlinkOut()}