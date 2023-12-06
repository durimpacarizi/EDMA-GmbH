"use strict";

const sliderArray = [];

let i = 0;
let imgArray = ['images/hero-image-main.jpg','images/hero-image-main.jpg','images/hero-image-main.jpg','images/hero-image-main.jpg',];
let textArray = ['Projects done!', 'Design awards!', 'Satisfied Customers!', 'Years of experience!'];
let data = [
    { number: '450+', text: 'Projects done!' },
    { number: '20+', text: 'Design awards!' },
    { number: '400+', text: 'Satisfied Customers!' },
    { number: '13+', text: 'Years of experience!' }
  ];

   
   
    function changeText(){
    //document.getElementById('slideshow').innerHTML = textArray[i];
    const slideshow = document.getElementById('slideshow');
    const text = document.querySelector('.text');

    const currentData = data[i];
    text.querySelector('h1').innerText = currentData.number;
    text.querySelector('h3').innerText = currentData.text;
    slideshow.innerHTML = `<h1>${currentData.number}</h1><h3>${currentData.text}</h3>`;
    
    slideshowImg.src = imgArray[i];
    
    if(i < data.length - 1){
        i++;  
    }
    else{
       i = 0;
    }
}

window.onload = function () {
    // Set an interval to call the changeText function every 2000 milliseconds (2 seconds)
    document.addEventListener(changeText());
};