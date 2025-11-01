console.log("Card dekhle tera");

let nme = document.getElementById("nm");
let cardname = document.getElementById("cdnm");
let acc = document.getElementById("acn");

let gen = document.getElementById("submit");

let min = 1000000000000000;
let max = 9999999999999999;

gen.addEventListener('click', () => {
    let num = Math.floor(Math.random()*(max-min+1))+min;
    let formatted = num.toString().replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");

    acc.innerText = formatted;
    cardname.innerText = nme.value;
})