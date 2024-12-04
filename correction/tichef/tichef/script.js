// Effectue une requête HTTP GET vers le fichier local "data.json" pour récupérer une liste de produits
fetch("data.json")
  .then((rep) => {
    // Lorsque la réponse est reçue, elle est convertie en JSON pour être manipulée en tant qu'objet JavaScript
    return rep.json();
  })
  .then((donnee) => {
    // Une fois les données récupérées et converties, elles sont affichées dans la console pour vérification
    console.log(donnee);

    // Parcourt le tableau de donnee pour récupérer chaque objet (chaque recette)
    donnee.forEach((recette) => {
      // Appelle la fonction 'afficher' pour intégrer les cartes de chaque recette dans la page HTML
      afficher(recette);
    });
  });

// ** Fonction : afficher **
// Rôle : Insérer dynamiquement une carte de recette dans la page HTML avec des informations et un style spécifique
// Paramètre : "recetteActuelle" - un objet contenant les informations d'une recette
// Retour : Aucun (la fonction manipule directement le DOM)
function afficher(recetteActuelle) {
  // Récupère les propriétés de la recette actuelle
  let img = recetteActuelle.img; // Lien de l'image de la recette
  let portions = recetteActuelle.portions; // Nombre de portions
  let tpsPreparation = recetteActuelle.tempPreparation; // Temps nécessaire pour la préparation
  let tpsCuisson = recetteActuelle.tempCuisson; // Temps nécessaire pour la cuisson
  let difficulte = recetteActuelle.difficulte; // Niveau de difficulté
  let nomRecette = recetteActuelle.nom; // Nom de la recette

  // Initialisation des listes HTML pour les ingrédients et les étapes
  let listeIngredients = "";
  let listeEtapes = "";

  // Parcourt chaque ingrédient et crée un élément de liste <li>
  recetteActuelle.ingredients.forEach((ingredient) => {
    console.log(ingredient); // Affiche les informations de chaque ingrédient dans la console pour vérification
    listeIngredients += `<li>${ingredient.quantite} ${ingredient.unite} ${ingredient.aliment}</li>`; // on ajoute l'lément de liste créer à la variable innitialisé plus haut. a terme, elle stockera l'ensemble des élément li 
  });

  // Parcourt chaque étape et crée un élément de liste <li> 
  recetteActuelle.etapes.forEach((etape) => {
    console.log(etape); // Affiche les informations de chaque étape dans la console pour vérification
    listeEtapes += `<li>${etape.descEtape}</li>`; // on ajoute l'lément de liste créer à la variable innitialisé plus haut. a terme, elle stockera l'ensemble des élément li 
  });

  // Ajoute dynamiquement un template de carte de recette remplit dynamiquement au conteneur avec l'ID "cardContainer"
  document.querySelector("#cardContainer").innerHTML += `
            <div class="carteRecette">
                <!-- Titre de la recette -->
                <h3>${nomRecette}</h3>

                <!-- Informations générales sur la recette -->
                <ul class="flex spaceBetween listDecoNone w60">
                    <li><span>Difficultés:</span> ${difficulte}</li>
                    <li><span>Portions:</span>${portions}</li>
                    <li><span>Temps de cuisson:</span>${tpsCuisson}</li>
                    <li><span>Temps de préparation:</span>${tpsPreparation}</li>
                </ul>

                <div class="flex spaceBetween">
                    <!-- Section des ingrédients -->
                    <div class="w20">
                        <h4>Ingrédients:</h4>
                        <ul>
                            ${listeIngredients} <!-- Liste des ingrédients générée dynamiquement -->
                        </ul>
                    </div>

                    <!-- Section des étapes -->
                    <div class="w35">
                        <h4>Étapes</h4>
                        <ol class="listDecoNone">
                        ${listeEtapes} <!-- Liste des étapes générée dynamiquement -->
                        </ol>
                    </div>

                    <!-- Section de l'image -->
                    <div class="w35">
                        <img src="${img}" alt="Image de la recette ${nomRecette}">
                    </div>
                </div>
            </div>
  `;
}
