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
//Choix aléatoire
function choiceRandomWord (){
    let randomWord = Math.floor(Math.random() * Math.floor(WORDS.length));
    return WORDS[randomWord];
}

//////////////////////////////////////////////////////////////////////////////
// Convertir le mot aleatoire en tableau
function splitWordInArray(randomWord) {
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

//////////////////////////////////////////////////////////////////////////////
// Le jeu

//genere un mot random
var randomWord = choiceRandomWord(WORDS);
console.log(randomWord);

//split le mot random
var arrayWord = splitWordInArray(randomWord);

// affiche le mot caché
var hiddenLetter = showHiddenLetter(randomWord)
console.log(`Trouves le mot caché : ${hiddenLetter}`);
alert(`Trouve le mot caché : ${hiddenLetter}`);

// Saisie utilisateur    
// on boucle tant que le score total n'est pas a 0 et que tous les elements n'ont pas été trouvé.
while(scoreTotal > 0) {
    var userChoice = prompt(`Points restants : ${scoreTotal} \n\n${hiddenLetter}\n\nSaisie une lettre !`);
    console.log(userChoice);

    for (let i = 0; i < arrayWord.length; i ++) {      
        if (userChoice === arrayWord[i])  {
            arrayWord[i] = userChoice;
            alert(`Points restants : ${scoreTotal}\nGG ! On conctinue`)  
            console.log("win")         
        }
        else {
            scoreTotal --, alert(`Points restants : ${scoreTotal}\nTry again ! `);
            console.log("loose")         
        }            
    }
}

 




























