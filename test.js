
const body = document.body;
const colorText = document.getElementById('color');
const button = document.getElementById('change');


function changeColor(event){
    var rgb = [];

    for(var i = 0; i < 3; i++)
        rgb.push(Math.floor(Math.random() * 255));
    
    body.style.backgroundColor = 'rgb('+ rgb.join(',') +')';
    colorText.innerText = rgb;
}


button.addEventListener('click', changeColor);