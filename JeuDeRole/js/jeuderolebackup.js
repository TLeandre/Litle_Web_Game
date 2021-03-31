

//  version de base avec le soin en plus


function hasard(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
    
}
var Personnage = {
    
        nom : "",
        sante : 0,  // point de sante qui va descendre et monter
        santebase : 0,  // point de sante qui ne va pas bouger
        force : 0,
        regen : 20,
        nivesquive : 0,  // point d'esquive qui determine la cahnce de esquiver  
        esquive : 0,  // si oui ou non elle esquive ( 0 ou 1 )
        contreattaque : 0,  // si oui ou non elle contre attaquer ( 0 ou 1 )
        nivcontreattaque : 0,  // point de contre attaquer qui determine la cahnce de contre attaquer 
        classe : "",
        niveaustable : 0,  //niveau pour savoir si il a monter de level ou pas (vari)
        level : 0,  // nombre de level qui vari 
        xp : 0,  // xp qui vari 
        xpmax : 0,  // xp a atteindre pour monter de level ( en fonction de lvl)
        choix : "",
        potion : 0 ,
        nivcachette : 0,  // point de cachette qui determine la chance de se cacher
        cachette : 0,  // si oui ou non elle se cache ( 0 ou 1 )
        piece : 0,
    
    decrire : function () {
        
      var description = console.log(this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et il detient " + this.potion + " potion de sante et " + this.piece + " piece d'or.");
        return description;
    },
    
    regeneration : function () {
      
        this.potion = this.potion - 1 ;
        var santemanquant = this.santebase - this.sante ;
        var santearegen = ((santemanquant * this.regen ) / 100 ) ;
        this.sante = this.sante + santearegen ;
        console.log(this.nom + " c'est soigné de " + santearegen + " points de vie ");
        console.log(this.nom + " a desormets " + this.sante + " points de vie mais il ne lui reste que " + this.potion + " potion de sante");
        console.log("--------------------");
        
    },
    
    definirperso : function () {
        
        this.nom = nomduperso[i];
        var nbpredef = 0;
        
        while ( nbpredef === 0 ) {
            
            console.log("Chasseur : 1");
            console.log("Viking : 2");
            console.log("Combattant : 3");
            console.log("--------------------");
            
            var defclasse = prompt("Quel classe voulez-vous choisir ?");
            this.classe = defclasse;
            
              if ( this.classe === "1" ){
                 this.force = 48 ;
                 this.sante = 460 ;
                 this.santebase = 460 ;
                 this.nivesquive = 21 ;
                 this.nivcontreattaque = 12 ;
                 this.potion = 2 ;
                 this.level = 1;
                 this.niveaustable = 1;
                 this.xpmax = 300;
                 this.nivcachette = 75;
                 nbpredef = 1 ;
                 console.log( this.nom + " a choisi la classe Chasseur.")
                
             }else if ( this.classe === "2" ){
                 this.force = 36 ;
                 this.sante = 540;
                 this.santebase = 540;
                 this.nivesquive = 16 ;
                 this.nivcontreattaque = 17 ;
                 this.potion = 4 ;
                 this.level = 1;
                 this.niveaustable = 1;
                 this.xpmax = 300;
                 this.nivcachette = 70;
                 nbpredef = 1 ;
                 console.log( this.nom + " a choisi la classe Viking.")
                 
             }else if ( this.classe === "3" ){
                 this.force = 25 ;
                 this.sante = 610 ;
                 this.santebase = 610 ;
                 this.nivesquive = 12 ;
                 this.nivcontreattaque = 21 ;
                 this.potion = 3 ;
                 this.level = 1;
                 this.niveaustable = 1;
                 this.xpmax = 300;
                 this.nivcachette = 65;
                 nbpredef = 1 ;
                 console.log( this.nom + " a choisi la classe Combattant.")          
                
             }else {
               console.log("Désole mais la classe que tu a choisi n'est pas disponible. ");
               console.log("--------------------");
            }
        }
    },
    
    amelioration : function () {
      
        var nb77 = 0;
        
        while ( nb77 === 0 ) {
            
            console.log("Améliorer la force d'attaque : 1");
            console.log("Améliorer la santé maximum : 2");
            console.log("Améliorer les chances d'esquiver : 3");
            console.log("Améliorer les chances de contre attaquer : 4");
            console.log("Améliorer le niveau de regeneration des potions de santé : 5");
            console.log("--------------------");
        
            var amelio = prompt("Quel caractéristique voulez-vous améliorer ?");
            
            if ( amelio === "1" ){
                
                this.force = this.force + 7 ;
                nb77 = 1;
                console.log(this.nom + " a choisi d'ameliorer sa force et en gagne 7, il a desormet " + this.force + " de force d'attaque");
                
            }else if ( amelio === "2" ){
                
                this.santebase = this.santebase + 23 ;
                nb77 = 1;
                console.log(this.nom + " a choisi d'ameliorer sa santé maximum et en gagne 23, il a desormet " + this.santebase + " de santé maximum");
                
            }else if ( amelio === "3" ){
                
                this.nivesquive = this.nivesquive + 4 ;
                nb77 = 1;
                console.log(this.nom + " a choisi d'ameliorer son niveau d'esquive et en gagne 4, il a desormet " + this.nivesquive + " de niveau d'esquive");
                
            }else if ( amelio === "4" ){
                
                this.nivcontreattaque = this.nivcontreattaque + 4 ;
                nb77 = 1; 
                console.log(this.nom + " a choisi d'ameliorer son niveau de contre attaque et en gagne 4, il a desormet " + this.nivcontreattaque + " de niveau de contre attaque");
                
            }else if ( amelio === "5" ){
                
                this.regen = this.regen + 4 ;
                nb77 = 1;
                console.log(this.nom + " a choisi d'ameliorer son niveau de regeneration et en gagne 4, il a desormet " + this.regen + " de niveau de regeneration");
                
            }else {
                
                console.log("Le choix que vous avez effectuer n'est pas disponible ");
                console.log("--------------------");
            }
        }
            
    },
    
    changementdelvl : function () {
        
        this.niveaustable = this.niveaustable + 1;
        this.level = this.level + 1;
        this.xp = 0;
        this.xpmax = this.xpmax + 100;
        
    },
    
    attaque : function (cible) {
        
        if ( this.sante > 0 ){
            
            var degats = this.force;
            console.log(this.nom + " va attaquer " + cible.nom);
            cible.esquiver();
            
            if ( cible.esquive === 1 ) {
                
                console.log( cible.nom + " a réussi a esquiver l'attaque de " + this.nom );
            }else {
                
                cible.contreattaquer(); 
                
                if ( cible.contreattaque === 1 ) {
                    
                    console.log( cible.nom + " a réussi a contre attaquer " + this.nom + " est lui fait " + cible.force + " de degat ");
                    this.sante = this.sante - cible.force ;
                    console.log("Il reste " + this.sante + " points de vie à " + this.nom);
                    
                }else {
                
                console.log(this.nom + " fait " + degats + " de dégats à " + cible.nom);
                cible.sante = cible.sante - degats;
                
                if ( cible.sante > 0 ) {
                    
                    console.log("Il reste " + cible.sante + " points de vie à " + cible.nom);
                }else {
                    console.log( cible.nom + " est mort.");
                    this.xp = this.xp + 200;
                }
            }
          }
        }else {
            console.log(this.nom + " ne peut pas attaquer, il est mort ...");
        }
        
        console.log("--------------------");
    },
    
    choisir : function () {
        
        var nb4 = 0;
        
        while( nb4 === 0 ){
            
            console.log("Attaquer : 1");
            console.log("Soigner : 2");
            console.log("Se cacher : 3");
            console.log("Chercher : 4");
            console.log("--------------------");
            
            var choixplusieur = prompt( this.nom + " Quel action voulez vous effectuer ?");
            
                if ( choixplusieur === "1" ) {
                    
                    this.choix = "Attaquer";
                    nb4 = 1 ;
                    
                }else if ( choixplusieur === "2" ) {
                    
                    if ( this.potion > 0 ) {
                        
                        this.choix = "Soigner";
                        nb4 = 1 ;
                    }else {
                        
                        console.log("Il ne vous reste plus de potion ");
                        console.log("--------------------");
                    }
                    
                }else if ( choixplusieur === "3" ) {
                    
                    this.choix = "Secacher";
                    nb4 = 1 ;
                    
                }else if ( choixplusieur === "4" ) {
                    
                    this.choix = "Chercher";
                    nb4 = 1 ;
                    
                }else {
                    
                    console.log("Cette action n'est pas disponible")
                    console.log("--------------------");
                    
                }
                
        }
        
    },
    
    contreattaquer : function () {
        
        var nb2 = hasard(1,100);
        if ( nb2 < this.nivcontreattaque ) {
            this.contreattaque = 1;
        }else {
            this.contreattaque = 0;
        }
        
    },
    
    chercher : function () {
        
        var nbpiece = hasard(1,100);
        
        
        console.log("En cherchant " + this.nom + " a trouver " + nbpiece + " piece d'or ");
        this.piece = this.piece + nbpiece ;
        console.log( this.nom + " a desormet " + this.piece + " piece d'or.");
        console.log("--------------------");
        
    },
    
    cache : function () {
        
        var nb7 = hasard(1,100);
        if ( nb7 < this.nivcachette ) {
            this.cachette = 1;
            console.log("Vous avez reussi a trouver une bonne cachette.");
            console.log("--------------------");
        }else {
            this.cachette = 0;
            console.log("Vous n'avez pas reussi a trouver de cachette, elles sont toutes prises");
            console.log("--------------------");
        }
        
    },
    
    esquiver : function () {
      
        var nb1 = hasard(1,100);
        if ( nb1 < this.nivesquive ) {
            this.esquive = 1;
        }else {
            this.esquive = 0;
        }
    },
    
};

var nbdeperso = prompt("Combien il y a de joueur");
var perso = [];
var nomduperso = [];

for ( var i = 0; nbdeperso > i; i++) {
    
    nomduperso[i] = prompt("Quel est le nom du joueur numero " + ( i + 1 ));
    perso[i] = Object.create(Personnage);
    perso[i].definirperso();
    perso[i].decrire();
    console.log("--------------------");
    
}

console.log("Les joueurs restant sont : ");

for ( i = 0; nbdeperso > i; i++) {
    if ( perso[i].sante > 0 ) {
        console.log(perso[i].nom);
    }
}
console.log("--------------------");

var joueurrestant = nbdeperso;

while ( joueurrestant > 1 ) {
    
    for ( i = 0; nbdeperso > i; i++) {
        
        if ( perso[i].sante > 0 ) {
            
            console.log("A " + perso[i].nom + " de jouer");
            console.log("--------------------");
            perso[i].choisir();
            perso[i].cachette = 0;
            if( perso[i].choix === "Attaquer") {
                
                var persoaattaquer = [];
                var nb99 = 0;
                
                while ( nb99 === 0 ) {
                    
                    persoaattaquer[1] = prompt(perso[i].nom + " Quel personne voulez-vous attaquer");
                    
                    for ( var x = 0; nbdeperso > x; x++) {
                        
                        if ( persoaattaquer[1] === perso[x].nom )  {
                            
                            if ( persoaattaquer[1] === perso[i].nom ) {
                                    console.log("Désoler mais vous ne pouvez pas vous attaquer.");
                                    console.log("--------------------");
                                } else if ( perso[x].sante > 0 ) {
                                    
                                    if ( perso[x].cachette === 0 ) {
                                        
                                        perso[i].attaque(perso[x]);
                                        nb99 = 1;
                                    }else {
                                    
                                        console.log("Vous ne pouvez pas attaquer " + perso[x].nom + " il est trop bien cacher.");
                                        console.log("--------------------");
                                    }
                                    
                                } else {
                                    console.log("Désoler mais ce personnage est mort ");
                                } 
                        }
                    }
                }
                
            }else if ( perso[i].choix === "Soigner" ) {
                
                perso[i].regeneration();
                nb99 = 1;
                
            }else if ( perso[i].choix === "Secacher" ) {
                
                perso[i].cache();
                nb99 = 1;
            }else if ( perso[i].choix === "Chercher" ) {
                
                perso[i].chercher();
                nb99 = 1;
            }
        }
    }
    
    console.log("les joueurs restant sont : ");
 joueurrestant = 0;
    
for ( i = 0; nbdeperso > i; i++) {
    if ( perso[i].sante > 0 ) {
        perso[i].xp = perso[i].xp + 300;
        console.log(perso[i].nom);
        joueurrestant++ ;
      }
   }
    
    console.log("--------------------");
    
    for ( i = 0; nbdeperso > i; i++) {
        
        if ( perso[i].xp >= perso[i].xpmax ) {
            
            console.log(perso[i].nom + " a augmenter de lvl et peut donc améliorer une capacité.");
            console.log("--------------------");
            perso[i].changementdelvl();
            perso[i].amelioration();
            console.log("--------------------");
            
        }
        
    }
    
}

alert("Merci d'avoir joué à la version 1.0.0 notre jeu, pour une nouvelle parti rafraichisais la page ");