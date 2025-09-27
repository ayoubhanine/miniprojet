let personne = {
  nom: "Ayoub",
  age: 25,
  saluer: function() {
    console.log("Bonjour, je suis " + this.nom);
  }
};
personne.saluer(); // Appelle la méthode saluer de l'objet personne

// Accéder aux propriétés de l'objet
console.log("Nom:", personne.nom);

console.log("Âge:", personne.age);
