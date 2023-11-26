const catImageDiv = document.querySelector(".cat-image-block");
const dogImageDiv = document.querySelector(".dog-image-block");

const catImage = document.querySelector(".cat-image-block img");
const dogImage = document.querySelector(".dog-image-block img");

const firstButton = document.querySelector(".first-button");
const secondButton = document.querySelector(".second-button");
const thirdButton = document.querySelector(".third-button");

firstButton.addEventListener("click", function(){
	catImageDiv.style.width = "90%";
	dogImageDiv.style.width = "10%";

	dogImage.style.width = "0%";
	catImage.style.width = "auto";
});

secondButton.addEventListener("click", function(){
	catImageDiv.style.width = "50%";
	dogImageDiv.style.width = "50%";
	
	catImage.style.width = "100%";
	dogImage.style.width = "100%";
});

thirdButton.addEventListener("click", function(){
	dogImageDiv.style.width = "90%";
	catImageDiv.style.width = "10%";

	catImage.style.width = "0%";
	dogImage.style.width = "auto";
});