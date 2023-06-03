var container = document.querySelector('.container');
var x = document.querySelector('.x');
var y = document.querySelector('.y');

console.log(x);
console.log(y);


window.addEventListener('mousemove', (event) => {
    console.log(event);

    x.innerHTML = `${event.clientX}`;
    var xH4 = document.createElement('h4');
    xH4.innerHTML = 'The Position of Mouse X (px)';
    x.appendChild(xH4);

    y.innerHTML = `${event.clientY}`;
    var yH4 = document.createElement('h4');
    yH4.innerHTML = 'The Position of Mouse Y(px)';
    y.appendChild(yH4);
});




