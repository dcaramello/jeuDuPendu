// Le jeu du pendu //

//             ============
//              |      ||
//              O      || 
//             /|\     ||
//            / | \    ||
//             / \     ||
//            /   \    ||
//                     ||
// -----------------------------------------------------------------------------------------------------------------------

// message bienvenue
alert("Bienvenue dans le jeu du pendu !");

// LES VARIABLES
var scoreTotal = 7;
const WORDS = [
    "javascript",
    "programming",
    "git",
    "linux",
    "data",
    "server",
    "client",
    "php",
    "github",
    "terminal",
    "code",
    "web",
    "computer"
]
console.log(WORDS);

//////////////////////////////////////////////////////////////////////////////
// LES FONCTIONS

//Choix aléatoire
function choiceRandomWord (){
    let randomWord = Math.floor(Math.random() * Math.floor(WORDS.length));
    return WORDS[randomWord];
}

//////////////////////////////////////////////////////////////////////////////
// Convertir le mot aleatoire en tableau
function splitRandomWordInArray(randomWord) {
    let arrayWord = randomWord.split('');
    return arrayWord;    
}

//////////////////////////////////////////////////////////////////////////////
// convertir les éléments du tableau en " _ " pour l'affichage
function showHiddenLetter (randomWord){
    let hiddenLetter = [];
    for (var i of randomWord){
        hiddenLetter += " _ ";
    }
    return hiddenLetter;
}

function justOneLetter (oneLetter) {
    while(oneLetter.length > 1) {
        oneLetter = prompt("Une seule lettre svp!");
    }
    return oneLetter;
}

//////////////////////////////////////////////////////////////////////////////
// Le jeu

//genere un mot random
var randomWord = choiceRandomWord(WORDS);
console.log(randomWord);

//split le mot random
var arrayWord = splitRandomWordInArray(randomWord);
console.log(arrayWord);

// affiche le mot caché
var hiddenLetter = showHiddenLetter(randomWord)
alert(`Trouve le mot caché : ${hiddenLetter}`);
console.log(`${hiddenLetter}`);


while(scoreTotal > 0) {
    // Saisie utilisateur
    var userChoice = justOneLetter(prompt(`Points restants : ${scoreTotal} \n\n${hiddenLetter}\n\nSaisis une lettre !`));
    console.log(userChoice);  


//check si la lettre est dans le tableau
    if (arrayWord.includes(userChoice))  {
        console.log("found");
        for (var i = 0; i < arrayWord.length; i ++) {
            if (userChoice.toLowerCase() === arrayWord[i]) {
            hiddenLetter[i] = userChoice.toLowerCase();
            console.log(arrayWord);
            }
        }
    }
    else {
        console.log("not found");        
        scoreTotal --;
    }
}
























