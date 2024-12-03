// 1 : J'analyse les données
// 2 : Je crée mon modèle de carte en Html
// 3 : Je récupère la donnée et je l'affiche en consoloe
// 4 : Je stock le chemin de la donnée dans la variable
// 5 : Je crée les cartes remplie dynamiquement
// 6 : Je les envois dans le dom
// 7 : CA MARCHE PAS !!!


fetch(`data.json`)
.then((rep) => {
    return rep.json()
})
.then(donnee=>{
        // Affiche les données dans la console pour vérification
        console.log(donnee);

        // Parcourt chaque produit et appelle la fonction 'afficher'
        donnee.forEach(prod => {
           /*  prod.ingredient.forEach(ingredient => {
             let typeIngredient = ingredient.aliment
             ingredient(typeIngredient)
            });
 */ 
            affiche(prod)
             })
            }) 

    function affiche(prod){
        
       /* prod.ingredients.forEach(ing=> {
            console.log(ing)
            console.log(ing.quantite, ing.unite, ing.aliment)
            
            let qte = ing.quantite;
            let unite = ing.unite;
            let aliment = ing.aliment;

        let ingredientContainer = document.querySelector("#ingredient")
        ingredientContainer.innerHTML +=
        ` <li> ${qte} ${unite} ${aliment} </li> `
        });*/


       /* prod.etapes.forEach(etape=> {
            console.log(etape)
            console.log(etape.numeroEtape, etape.descEtape)
    
            let numEtape = etape.numeroEtape;
            let etapedesc = etape.descEtape;
           
    
            let etapeContainer = document.querySelector("#etape")
            etapeContainer.innerHTML +=
            ` <li> ${numEtape} ${etapedesc}</li> `;
            });*/
            
            let nom = prod.image
            let img = prod.title;
            let difficulte = prod.difficulte;
            let tempPreparation = prod.tempPreparation;
            let tempCuisson = prod.tempCuisson;
            let portions = prod.portions;
            
            // on traite les ingredients : prod.ingredients est un tableau avec des clés quantite, unite et aliment
            // on a besoin de generer : <li>200 gr de pate</li>
            let listeIng = ""
            prod.ingredients.forEach(ing=>{
                listeIng+=`<li>${ing.quantite} ${ing.unite} ${ing.aliment} </li>`
            })
            console.log(listeIng)


            let listeEtape = ""
            prod.etapes.forEach(etp=>{
                listeEtape+=`<li> ${etp.numEtape} ${etp.etapedesc} </li>`
            })
            console.log(listeEtape)
    
        // Ajoute le contenu à la carte
        let cardContainer = document.querySelector("#result")
        cardContainer.innerHTML +=`
           <div>
                <h3>${nom}</h3>
                <ul>
                    <li><span>Difficulté:</span>${difficulte}</li>
                    <li><span>Portions:</span>${portions}</li>
                    <li><span>Temps de préparation:</span>${tempPreparation}</li>
                    <li><span>Temps de cuisson:</span>${tempCuisson}</li>
                </ul>
                <div>
                    <div>
                        <h4>Ingrédients</h4>
                        <ul id="ingredients">
                           ${listeIng}
                        </ul>
                    </div>
                    <div>
                        <h4></h4>
                        <ol id="etape">
                           ${listeEtape}
                        </ol>
                    </div>
                    <div>
                        <img src=" ${img} " alt="">
                    </div>
                </div>
            </div>  `;
}