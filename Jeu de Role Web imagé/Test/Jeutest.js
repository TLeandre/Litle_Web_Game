var NBJ = 0;


function hasard(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}


function ajoujoueur(){
    var moins = document.getElementById("plusbouton");
    moins.parentNode.removeChild(moins);
    var image = document.createElement('img');
    image.setAttribute('src', 'interrogation.png');
    image.className = 'interrogationI';
    var paraSante = document.createElement('p');
    paraSante.className = 'PSante';
    paraSante.innerHTML = 'Santé : ';
    var paraOr = document.createElement('p');
    paraOr.className = 'POr';
    paraOr.innerHTML = 'Or : ';
    
    if(NBJ===0){
        var perso1 = document.createElement('div');
        perso1.className = 'objet2';
        perso1.setAttribute('id', 'personnage1');
        var Nomperso1 = document.createElement('p');
        Nomperso1.innerHTML = 'Prenom';
        Nomperso1.className = 'NomPerso';
        document.getElementById('section1').appendChild(perso1);
        document.getElementById('personnage1').appendChild(Nomperso1);
        document.getElementById('personnage1').appendChild(image);
        document.getElementById('personnage1').appendChild(paraSante);
    }else if (NBJ===1){
        var perso2 = document.createElement('div');
        perso2.className = 'objet2';
        perso2.setAttribute('id', 'personnage2');
        var Nomperso2 = document.createElement('p');
        Nomperso2.innerHTML = 'Prenom';
        Nomperso2.className = 'NomPerso';
        document.getElementById('section1').appendChild(perso2);
        document.getElementById('personnage2').appendChild(Nomperso2);
        document.getElementById('personnage2').appendChild(image);
    }else if (NBJ===2){
        var perso3 = document.createElement('div');
        perso3.className = 'objet2';
        perso3.setAttribute('id', 'personnage3');
        var Nomperso3 = document.createElement('p');
        Nomperso3.innerHTML = 'Prenom';
        Nomperso3.className = 'NomPerso';
        document.getElementById('section2').appendChild(perso3);
        document.getElementById('personnage3').appendChild(Nomperso3);
        document.getElementById('personnage3').appendChild(image);
    }else{
        var perso4 = document.createElement('div');
        perso4.className = 'objet2';
        perso4.setAttribute('id', 'personnage4');
        var Nomperso4 = document.createElement('p');
        Nomperso4.innerHTML = 'Prenom';
        Nomperso4.className = 'NomPerso';
        document.getElementById('section2').appendChild(perso4);
        document.getElementById('personnage4').appendChild(Nomperso4);
        document.getElementById('personnage4').appendChild(image);
    }
    
    NBJ = NBJ + 1;
}


function commencer() {
    
    while (NBJ <= 3){
        
        var moins = document.getElementById("plusbouton");
        moins.parentNode.removeChild(moins);
        NBJ = NBJ + 1;
    }
}