// Le jeu du pendu //

//             ============
//              |      ||
//              O      || 
//             /|\     ||
//            / | \    ||
//             / \     ||
//            /   \    ||
//                     ||
// ---------------------------------------

// message bienvenue
alert("Bienvenue dans le jeu du pendu !");

// variables globales
var scoreTotal = 7;
const word = [
    "javascript",
    "programming",
    "git",
    "linux",
    "data",
    "server",
    "client"
]
console.log(word);
//-----------------------------------------------
//Choix aléatoire
function choiceRandomWord (){
    let randomWord = Math.floor(Math.random() * Math.floor(word.length));
    return word[randomWord];
}
var randomWord = choiceRandomWord(word);
console.log(randomWord);
//-------------------------------------------------
//Affiche : _ _ _ _ _ _
function showHiddenLetter (randomWord){
    let hiddenLetter = "";
    for (var i of randomWord){
        hiddenLetter += " _ ";
    }
    return hiddenLetter;
}
var hiddenLetter = showHiddenLetter(randomWord)
console.log(`Trouves le mot caché : ${hiddenLetter}`);
alert(`Trouve le mot caché : ${hiddenLetter}`);
//----------------------------------------------------
// affiche : rentrer une lettre
// + rentrer une lettre
function showPutLetter (){
    let userChoice = prompt(`Points restants : ${scoreTotal} \n\n${hiddenLetter}\n\nRentrer une lettre !`);
    return userChoice;
}
userChoice = showPutLetter();
console.log(userChoice);
//------------------------------------------------------
//Check de la lettre
function checkLetter() {
    let goodChoice = "";
    var badChoice = "";
    if (randomWord.includes(userChoice)) {
        alert(`GG ! ${scoreTotal}`)
        return goodChoice;     
    }
        else {
        scoreTotal --, alert(`Try again ! ${scoreTotal}`);
        return badChoice;    
    }            
}
var letter = checkLetter();
console.log(letter);


    //si ok 
        // remplace le _
        //sinon
            //perd 1 point

// vérifier si assez de points pour continuer le jeu
    //si score a 0 perdu et recommence le jeu
        //sinon ca continu

//vérifier si le mot est complet pour continuer le jeu
    //si ok stop et WIN
        //sinon retourne a affiche : _ _