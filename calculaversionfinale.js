const prompt=require("prompt-sync")();

let historique=[];
while(true ){
    let f=prompt("choisir loperation (+,-,*,/,^,r,!,historique)ou quitter :");
    

if(f==="+"){
    
        function addition(a,b){
            
            return a+b
                        }
            let n=Number(prompt("entre le premier nombre :"));
            let m=Number(prompt("entrer le deuxieme nombre :"));
             if(!isNaN(n)&&!isNaN(m) &&f!=="quitter" ){
console.log("le resultat est :",addition(n,m))
historique.push(addition(n,m))
} 
else{ console.log("Erreur :veuillez  entrer un nombre valide !")}}
     if(f==="-"){
        function Soustraction(a,b){
        return a-b
    }
    let n=Number(prompt("entre le premier nombre :"));
            let m=Number(prompt("entrer le deuxieme nombre :"));
                if(!isNaN(n)&&!isNaN(m) &&f!=="quitter" ){
    console.log("le resultat est :",Soustraction(n,m))

    historique.push(Soustraction(n,m))}
    else{ console.log("Erreur :veuillez  entrer un nombre valide !")}}
    
     if (f==="*"){
        function Multiplication(a,b){
            return a*b
        }
         let n=Number(prompt("entre le premier nombre :"));
            let m=Number(prompt("entrer le deuxieme nombre :"));
                if(!isNaN(n)&&!isNaN(m) &&f!=="quitter" ){
    console.log("le resultat est :",Multiplication(n,m))
    historique.push(Multiplication(n,m))}
        else{ console.log("Erreur :veuillez  entrer un nombre valide !")}}
    
     if(f==="/"){
       
            function Division(a,b){
            return a/b
        }
        let n=Number(prompt("entre le premier nombre :"));
            let m=Number(prompt("entrer le deuxieme nombre :"));
             if( m!==0 &&!isNaN(n)&&!isNaN(m) &&f!=="quitter" ){
                
        console.log("le resultat est :",Division(n,m))
        historique.push(Division(n,m))}
        
        else 
        { console.log("Erreur :veuillez  entrer un nombre valide  !")}
    }
     if (f==="^"|| f==="puissance"){
        function Puissance(base,exposant){
           let puiss=1;
           for(let i=0;i<exposant;i++){
                puiss*=base
           }
           return puiss;
        }
            let n=Number(prompt("entre la base :"));
            let m=Number(prompt("entrer l'exposant :"));
                if(!isNaN(n)&&!isNaN(m) &&f!=="quitter" ){
        console.log("le resultat est :",Puissance(n,m))
        historique.push(Puissance(n,m))
    }
    else{ console.log("Erreur :veuillez  entrer un nombre valide !")}}
     if (f==="r"){
        
        function racine(a){
            return Math.sqrt(a)
        }
            let n=Number(prompt("entre un nombre :"));
                if(!isNaN(n) &&f!=="quitter" ){
        console.log("le resultat est :",racine(n))
        historique.push(racine(n))
    }
    else{ console.log("Erreur :veuillez  entrer un nombre valide !")}
        }
    
         if (f=="!"){
        function Factorielle(a){
             if (a < 0) return "Erreur : factorielle non définie pour les négatifs.";
            let fac=1;
            for(i=1;i<=a;i++){
                fac*=i
            }
            return fac
        }
            let n=Number(prompt("entre un entier :"));
                if(!isNaN(n) &&f!=="quitter" ){
                console.log("le factoriell est :",Factorielle(n))
                historique.push(Factorielle(n))
    }
    else{ console.log("Erreur :veuillez  entrer un nombre valide !")}}
    if (f==="historique"){
        if (historique.length === 0) {
        console.log("Aucun calcul effectué pour l'instant.");
      } else {
        historique.forEach(h => console.log(h));
      
        console.log("l'historique est :",historique)
        }
    }
     if (f==="quitter"){
        console.log("fin de programme")
        break;
}
  }
