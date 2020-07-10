// Le jeu du pendu //

// message bienvenu
alert("Bienvenu dans le jeu du pendu !");

// variables globales
var score = 7;
var word = [
    "javascript",
    "programming",
    "git",
    "linux",
    "data",
    "server",
    "client"
]
console.log(word);

//Choix aléatoire
function choiceRandomWord (){
var randomWord = Math.floor(Math.random() * Math.floor(word.length));
  return word[randomWord];
}
var randomWord = choiceRandomWord(word);
console.log(randomWord);

//Affiche : _ _ _ _ _ _
    let hiddenLetter = "";
    for (var i of randomWord){
    hiddenLetter += " _ ";

console.log(`Trouves le mot caché : ${hiddenLetter}`);
    }


//affiche : rentrer une lettre
 
// rentrer une lettre

    //si ok 
        // remplace le _
        //sinon
            //perd 1 point

// vérifier si assez de points pour continuer le jeu
    //si score a 0 perdu et recommence le jeu
        //sinon ca continu

//vérifier si le mot est complet pour continuer le jeu
    //si ok stop et WIN
        //sinon retourne a affiche : _ _ _ _ _ _