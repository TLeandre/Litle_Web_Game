function hasard(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
    
}
var Personnage = {
    
        nom : "",
        sante : 0,  // point de sante qui va descendre et monter
        santebase : 0,  //point de sante qui ne va pas bouger
        force : 0,
        regen : 20,
        nivesquive : 0,
        esquive : 0,
        classe : "",
        choix : "",
        potion : 0 ,
    
    decrire : function () {
        
      var description = console.log(this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et il detient " + this.potion + " potion de sante.");
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
            
            var defclasse = prompt("Quel classe voulez-vous choisir ?   Chasseur, Viking, Combatant.");
            this.classe = defclasse;
            
              if ( this.classe === "Chasseur" ){
                 this.force = 48 ;
                 this.sante = 460 ;
                 this.santebase = 460 ;
                 this.nivesquive = 21 ;
                 this.potion = 3 ;
                 nbpredef = 1 ;
                 console.log( this.nom + " a choisi la classe Chasseur.")
                
             }else if ( this.classe === "Viking" ){
                 this.force = 36 ;
                 this.sante = 540;
                 this.santebase = 540;
                 this.nivesquive = 12 ;
                 this.potion = 5 ;
                 nbpredef = 1 ;
                 console.log( this.nom + " a choisi la classe Viking.")
                 
             }else if ( this.classe === "Combatant" ){
                 this.force = 25 ;
                 this.sante = 610 ;
                 this.santebase = 610 ;
                 this.nivesquive = 17 ;
                 this.potion = 4 ;
                 nbpredef = 1 ;
                 console.log( this.nom + " a choisi la classe Combatant.")          
                
             }else {
               console.log("Désole mais la classe que tu a choisi n'est pas disponible. ");
               console.log("--------------------");
            }
        }
    },
    
    attaque : function (cible) {
        
        if ( this.sante > 0 ){
            
            var degats = this.force;
            console.log(this.nom + " va attaquer " + cible.nom);
            cible.esquiver();
            
            if ( cible.esquive === 1 ) {
                
                console.log( cible.nom + " a réussi a esquiver l'attaque de " + this.nom );
            }else {
                console.log(this.nom + " fait " + degats + " de dégats à " + cible.nom);
                cible.sante = cible.sante - degats;
                
                if ( cible.sante > 0 ) {
                    
                    console.log("Il reste " + cible.sante + " points de vie à " + cible.nom);
                }else {
                    console.log( cible.nom + " est mort.");
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
            
            var choixplusieur = prompt( this.nom + " Quel action voulez vous effectuer ?      Attaquer, Soigner  ")
            
                if ( choixplusieur === "Attaquer" ) {
                    
                    this.choix = "Attaquer";
                    nb4 = 1 ;
                    
                }else if ( choixplusieur === "Soigner" && this.potion > 0 ) {
                    
                    this.choix = "Soigner";
                    nb4 = 1 ;
                    
                }else {
                    
                    console.log("Cette action n'est pas disponible")
                    console.log("--------------------");
                    
                }
                
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
            
            perso[i].choisir();
            if( perso[i].choix === "Attaquer") {
                
                var persoaattaquer = [];
                var nb99 = 0;
                
               persoaattaquer[1] = prompt(perso[i].nom + " Quel personne voulez-vous attaquer");
                    
                    for ( var x = 0; nbdeperso > x; x++) {
                        
                        if ( persoaattaquer[1] === perso[x].nom ) {
                            
                            if ( perso[x].sante > 0 ) {
                                
                                perso[i].attaque(perso[x]);
                
                            }else {
                                console.log("Désoler mais ce personnage est mort ");
                            }
                        }
                    }
                
            }else if ( perso[i].choix === "Soigner" ) {
                
                perso[i].regeneration();
                nb99 = 1;
                
            }
        }
    }
    
    console.log("les joueurs restant sont : ");
 joueurrestant = 0;
    
for ( i = 0; nbdeperso > i; i++) {
    if ( perso[i].sante > 0 ) {
        console.log(perso[i].nom);
        joueurrestant++ ;
      }
   }
    
    console.log("--------------------");
}

alert("Merci d'avoir joué à la version 1.0.0 notre jeu, pour une nouvelle parti rafraichisais la page ");