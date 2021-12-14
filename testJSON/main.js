var database = [
    {
        username:"oscar",
        mdp: "secret"

    },
    {
        username:"harold",
        mdp: "123"

    },
    {
        username:"hugo",
        mdp: "777"

    },
    {
        username:"joel",
        mdp: "moustique"

    }, 
    {
        username:"bruno",
        mdp: "pikachu"

    },
    
];

var newsFil = [
    {
        username:"Ali",
        TL:"J'adore Javascript "
    },
    {
        username:"Teddy",
        TL:"Vive le ternaire!!!"
    },
    {
        username:"joe",
        TL:"JS vs PHP qui gagne??"
    },
];

function isUserValid(username, mdp) {
    for (var i=0; i<database.length; i++) {
        if(database[i].username === username &&
            database[i].mdp === mdp) {
            return true;
        } 
    }
    return false;
}

function Identification(username, mdp) {
    if (isUserValid(username, mdp)) {
        console.log(newsFil);    
        } else {
            alert("Désolé, mauvais nom d'utilisateur et mot de passe!")
        }
    
} 

     


var userNamePrompt = prompt("Quel est ton nom ?");
var mdpPrompt = prompt("ton mpd??");

Identification(userNamePrompt, mdpPrompt);
