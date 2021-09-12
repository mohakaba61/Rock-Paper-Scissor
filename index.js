var randomNumber= Math.floor(Math.random()*3 +1);
var randonImages= "Images/image"+randomNumber+".png";

document.querySelector("img").setAttribute("src", randonImages);