//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//function multiply(num1, num2) {
//let result = num1 * num2;
//return result;
//}



//document.querySelector('html').onclick = function() {};
//二者等价
//let myHTML = document.querySelector('html');
//myHTML.onclick = function() {};



let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/2.jpg') {
      myImage.setAttribute('src', 'img/1.jpg');
    } else {
      myImage.setAttribute('src', 'img/2.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//function setUserName() {
//let myName = prompt('请输入你的名字。');
//localStorage.setItem('name', myName);
//myHeading.textContent = 'Mozilla 酷毙了，' + myName;
//}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}


