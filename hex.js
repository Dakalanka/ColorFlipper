const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
//example = #f12345
const btn = document.getElementById("btn"); //get the button
const color = document.getElementById("color"); //get the text span

btn.addEventListener('click', function(){
let hexColor = '#';
let i = 0; //variable for loop to generate
for (i = 0; i < 6; i++){
    hexColor = hexColor + hex[getRandomNumber()];
};


document.body.style.backgroundColor = hexColor;
color.textContent = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}