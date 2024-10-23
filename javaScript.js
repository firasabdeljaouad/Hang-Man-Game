const letters = "abcdefghijklmnopqrstuvwxyz"
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");
let wrongtray = 0;


lettersArray.forEach(letter =>{
    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
});

const words = {
    programing:["php","java script","go","scala","python"],
    movies:["Prestige","Ince ption","Parasite","Whiplash","Coco","Up"],
    people:["Albert","Einstein","C Ronaldo","Djocvitch"],
    countries:["Syria","Palestine","Yemen","Eygpt","Tunise"]
}

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random()*allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random()*randomPropValue.length);

let randomValueValue = randomPropValue[randomValueNumber];


document.querySelector(".category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");


let lettersAndSpace = Array.from(randomValueValue);


lettersAndSpace.forEach(letter =>{
    let emptySpan = document.createElement("span");
    if(letter === " "){
        emptySpan.className = "with-space";
    }
    lettersGuessContainer.appendChild(emptySpan);
});
let guessSpan = document.querySelectorAll(".letters-guess span");
let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click",(e)=>{
    let theStatus = false;
    if(e.target.className === "letter-box"){
        e.target.classList.add("clicked");

     let chosenWord = Array.from(randomValueValue.toLowerCase());
     let theclikckLitter = e.target.innerHTML.toLowerCase();
     
        // console.log(lettersAndSpace);
        
        chosenWord.forEach((wordLetter,wordIndex)=>{
           if(wordLetter === theclikckLitter) {
            theStatus = true;
           guessSpan.forEach((span,indexSpan)=>{
            if(indexSpan === wordIndex){
                span.innerHTML = theclikckLitter;
            }
           });
        }
        });

        if( theStatus!== true){
            wrongtray++;
            theDraw.classList.add(`wrong-${wrongtray}`)
            document.getElementById("fail").play();

            if(wrongtray === 8){
                endGame()
                lettersContainer.classList.add("finshed");
            }
        }else{
            document.getElementById("success").play();
        }
    }
});

function endGame(){
    let div = document.createElement("div");
    let  textDiv = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);
    div.appendChild(textDiv);
    div.className = "popup";
    document.body.appendChild(div)
}
function congrat(){
    let div = document.createElement("div");
    let  textDiv = document.createTextNode(`Congrats! you make ${wrongtray} fault`);
    div.appendChild(textDiv);
    div.className = "popup";
    document.body.appendChild(div)
}
