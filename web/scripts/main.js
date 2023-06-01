
// document.querySelector("html").addEventListener("click",function(){
//     alert("哈哈别戳我");
// });

let myImage = document.querySelector("img");
myImage.onclick = ()=>{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/aaa.png") {
        myImage.setAttribute('src','images/bbb.png');
    }else{
        myImage.setAttribute("src","images/aaa.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName) {
        setUserName()
    }else {
        localStorage.setItem("name",myName);
        myHeading.textContent = "mozilla 酷毙了，" + myName;    
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
}else {
   let storeedName = localStorage.getItem("name");
   myHeading.textContent = "mozilla 酷毙了，" + storeedName;
}

myButton.onclick = function() {
    setUserName();
}