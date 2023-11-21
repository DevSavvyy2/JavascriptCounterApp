document.getElementById('increase-btn').addEventListener('click', function() {
    var value = parseInt(document.getElementById('number').innerHTML);
    value += 1;
    document.getElementById('number').innerHTML = value;
   
    // Change color when the value is less than zero
    if (value < 0) {
       document.getElementById('number').style.color = 'red';
    } else {
       document.getElementById('number').style.color = 'white';
    }
   });
   
   document.getElementById('decrease-btn').addEventListener('click', function() {
    var value = parseInt(document.getElementById('number').innerHTML);
    value -= 1;
    document.getElementById('number').innerHTML = value;
    if (value == -1) {
        document.getElementById('number').style.color = 'red';
    }
   
   });