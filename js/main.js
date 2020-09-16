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

// message de bienvenue
alert("Bienvenue dans le jeu du pendu!");

// LES VARIABLES
var scoreTotal = 7; //les points de vie
var wordInProgress = 0; //pour determiner quand le mot est trouvé
const WORDS = [
    "tomate",
    "chaise",
    "pain",
    "chien",
    "chat",
    "table",
    "jardin",
    "guitare",
    "arbre",
    "poisson",
    "cuisine",
    "voiture",
    "ordinateur",
    "banane",
    "bureau",
    "fauteuil",
    "chambre",
    "pamplemousse",
    "orange",
    "cornichon",
    "sushi",
    "hamburger",
    "salade"
];

//////////////////////////////////////////////////////////////////////////////
// LES FONCTIONS

//Choix aléatoire d'un mot dans WORDS
function choiceRandomWord (){
    let randomWord = Math.floor(Math.random() * Math.floor(WORDS.length));
    return WORDS[randomWord];
}

// Convertir le mot aleatoire en tableau avec la methode split
function splitRandomWordInArray(randomWord) {
    let arrayWord = randomWord.split('');
    return arrayWord;    
}

// convertir les éléments du tableau en " _ " pour l'affichage
function showHiddenLetter (randomWord){
    let hiddenLetter = [];
    for (let i = 0; i < randomWord.length; i++){
        hiddenLetter[i] = " _ ";
    }
    return hiddenLetter;
}

// function pour vérifier q'une seule lettre a été saisie
function justOneLetter (oneLetter) {
    while(oneLetter.length > 1) {
        oneLetter = prompt("Attention, il faut rentrer une seule lettre !");
    }
    return oneLetter;
}

//////////////////////////////////////////////////////////////////////////////
// Le jeu
//---------
// Tant que les points restants n'ont pas atteint 0 la partie continue
// le joueur saisie une lettre
// si la lettre est présente dans le tableau arrayWord, elle remplace la valeur correspondante du tableau hiddenLetter 
// a chaque valeur de hiddenLetter révélée on incrémente un point de wordInProgress. 
// Si la valeur de wordInProgress est égale au nombre d'élément de arrayWord c'est gagné

var randomWord = choiceRandomWord(WORDS);
var arrayWord = splitRandomWordInArray(randomWord);
var hiddenLetter = showHiddenLetter(randomWord)

alert(`Trouves le mot caché : ${hiddenLetter}`);

while(scoreTotal > 0) {

    var userChoice = justOneLetter(prompt(`Points restants : ${scoreTotal} \n\n${hiddenLetter}\n\nSaisis une lettre !`));
    if (arrayWord.includes(userChoice))  {
        for (var i = 0; i < arrayWord.length; i ++) {
            if (userChoice.toLowerCase() === arrayWord[i]) {
                hiddenLetter[i] = userChoice.toLowerCase();
                wordInProgress ++;    
            }
        }
    }
    else {
        scoreTotal --;
    }
    if(wordInProgress === arrayWord.length){
        alert("Félicitation tu as gagné !");
        break;
    }
    else if (scoreTotal === 0) {
        alert("Perdu !...");
    }
}
























