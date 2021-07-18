const colors = ["Red", "Green", "rgba(133,122,200)", "#f15025"];


const btn = document.getElementById("btn"); //get the button
const color = document.getElementById("color"); //get the text span

btn.addEventListener('click', function(){
    //get random number between 0 - 3 colors[]
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];


});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
