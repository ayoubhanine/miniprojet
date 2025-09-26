const prompt=require("prompt-sync")();
let f=prompt("choisir loperation :");


if(f==="+"){
    let n=Number(prompt("entre le premier nombre :"));
    let m=Number(prompt("entrer le deuxieme nombre :"));
    if(!isNaN(n)&&!isNaN(m)){
        function addition(a,b){
    return a+b
}console.log("le resultat est :",addition(n,m))
}
        
        else{console.log("veuiller entrer un nombre valide")}

}
    else if(f==="-"){
         let n=Number(prompt("entre le premier nombre :"));
        let m=Number(prompt("entrer le deuxieme nombre :"));
         if(!isNaN(n)&&!isNaN(m)){
        function Soustraction(a,b){
        return a-b
    }
    console.log("le resultat est :",Soustraction(n,m))}
    else{console.log("veuiller entrer un nombre valide")}
    }
    else if (f==="*"){
            let n=Number(prompt("entre le premier nombre :"));
            let m=Number(prompt("entrer le deuxieme nombre :"));
         if(!isNaN(n)&&!isNaN(m)){

        function Multiplication(a,b){
            return a*b
        }
    console.log("le resultat est :",Multiplication(n,m))}
    else{console.log("veuiller entrer un nombre valide")}
    }
    else if(f==="/"){
         let n=Number(prompt("entre le premier nombre :"));
        let m=Number(prompt("entrer le deuxieme nombre :"));
         
        if( m!==0 && !isNaN(n)&&!isNaN(m)){
            function Division(a,b){
            return a/b
        }console.log("le resultat est :",Division(n,m))
        }
        else{ console.log("impossible de divizer par zero ou num invalide ")

        }
        
        
    }
    else if (f==="^"|| f==="puissance"){
         let n=Number(prompt("entre le premier nombre :"));
let m=Number(prompt("entrer le deuxieme nombre :"));
        function Puissance(base,exposant){
           let puiss=1;
           for(let i=0;i<exposant;i++){
                puiss*=base
           }
           return puiss;
        }
        console.log("le resultat est :",Puissance(n,m))
    }
    else if (f==="racine"){
        d=Number(prompt("entrer un nombre :"))
        function racine(a){
            return Math.sqrt(a)
        }
        console.log("le resultat est :",racine(d))
    }
    else if (f==="factorielle"){
        d=Number(prompt("entrer un nombre :"))
        function Factorielle(a){
            let fac=1;
            for(i=1;i<=a;i++){
                fac*=i
            }
            return fac
        }
        console.log("le resultat est :",Factorielle(d))
    }


