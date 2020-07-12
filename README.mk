#Le jeu du pendu

##Règles du jeu :

L'ordinateur va choisir un mot aléatoire, il va être caché au joueur. Le but du jeu et de trouver le mot caché.
Le  joueur débute la partie avec 7 points. il peut rentrer qu'une lettre par tour. Si il se trompe il perd un point, si il trouve il continue. A 0 point la partie est finie. 
Si le joueur trouve le mot complet il gagne la partie.

###Pourquoi ce projet ?

Toujours dans le cadre de ma formation developpeur web et web mobile a l'afpa. Ce projet a pour bur d'approfondir les connaissances aquises en javascript,
et de continuer a pratiquer afin d'acquérir une méthode professionnelle. C'est pourquoi tout le projet a été réalisé en fomation a distance.

##Compétences acquises :

- Concevoir du code par rapport à des tests déjà existants (TDD)
- Usage des boucles for of et for in
- Usage de foreach
- Usage des nouvelles notations (let, const, template...)
- Déclarer des classes et utiliser un constructeur d’objet
- Mettre en place une méthodologie agile pour gérer son projet 

##Spécifications fonctionnelles :
- Quand l’utilisateur arrive sur la page index.html le jeu démarre
- Par défaut l’ordinateur choisit un mot au hasard dans une liste et affiche au joueur le mot à deviner
  sous forme de underscores.
- Le joueur peut rentrer une lettre- L’ordinateur vérifie qu’une seule lettre a été rentrée et si cette lettre est présente dans le mot,
  remplace tous les underscores correspondant par la lettre avant de d’afficher à nouveau le mot. Si la
  lettre n’était pas présente le joueur perd un point
- Le joueur démarre à 7 point, s’il arrive à zéro, il a perdu, s’il trouve toutes les lettres du mot avant,
  il a gagné

##Spécifications techniques :

- Le projet est codé dans une base boilerplate qui respecte les standards de l’industrie
- Le JavaScript est dans un fichier séparé
- Le code est commenté, indenté, lisible et maintenable
- Le code fait usage au maximum des fonctions et des nouvelles normes JS
- Le jeu est accessible via un fichier index.html
- Le code du projet est disponible sur un repository GitHub
- Le repository contient un fichier README, une description, des mots clef et des commits

##Pour aller plus loin :
- Proposez une interface de commande à l’utilisateur. Quand celui-ci arrive sur l’index, ce n’est pas
  le jeu qui démarre mais une interface lui présentant les actions possibles et lui permettant de taper
  une commande. Liste des commandes :
• j : jouer → cela lance le jeu du pendu
• r : règles → cela affiche les règles
• q : quitter → arrête l’application



