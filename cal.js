const prompt=require("prompt-sync")();


let i=0;
while(f!=="quitter" ){
    let n=Number(prompt("entre le premier nombre :"));
    let m=Number(prompt("entrer le deuxieme nombre :"));
    let f=prompt("choisir loperation (+,-,*,/,^,r,!)ou quitter :");
    i++
 if(!isNaN(n)&&!isNaN(m) &&f!=="quitter" ){
if(f==="+"){
    
        function addition(a,b){
            
            return a+b
                        }
console.log("le resultat est :",addition(n,m))
}
    else if(f==="-"){
        function Soustraction(a,b){
        return a-b
    }
    console.log("le resultat est :",Soustraction(n,m))}
    
    
    else if (f==="*"){
        function Multiplication(a,b){
            return a*b
        }
    console.log("le resultat est :",Multiplication(n,m))}
        
    
    else if(f==="/"){
        if( m!==0 ){
            function Division(a,b){
            return a/b
        }console.log("le resultat est :",Division(n,m))
        }
        else{ console.log("impossible de divizer par zero ou num invalide ")
        }
    }
    else if (f==="^"|| f==="puissance"){
        function Puissance(base,exposant){
           let puiss=1;
           for(let i=0;i<exposant;i++){
                puiss*=base
           }
           return puiss;
        }
        console.log("le resultat est :",Puissance(n,m))
    }
    else if (f==="r"){
        
        function racine(a){
            return Math.sqrt(a)
        }
        console.log("le resultat est :",racine(n))
    }
    
         if (f=="!"){
        function Factorielle(a){
            let fac=1;
            for(i=1;i<=a;i++){
                fac*=i
            }
            return fac
        }
                console.log("le factoriell est :",Factorielle(n))
    }
}
else{console.log("nombre invalide")}}