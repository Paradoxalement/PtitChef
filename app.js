// 1 : J'analyse les données
// 2 : Je crée mon modèle de carte en Html
// 3 : Je récupère la donnée et je l'affiche en consoloe
// 4 : Je stock le chemin de la donnée dans la variable
// 5 : Je crée les cartes remplie dynamiquement
// 6 : Je les envois dans le dom
// 7 : CA MARCHE PAS !!!


fetch('data.json')
.then((rep) => rep.json()) // Convertit la réponse en JSON
    .then((donnee) => {
        // Affiche les données dans la console pour vérification
        console.log(donnee);

        // Parcourt chaque produit et appelle la fonction 'afficher'
        donnee.forEach((prod) => {
            affiche(prod);
        });
    })

    function affiche(prod){
        let nom = prod.image
        let img = prod.title;
        let difficulte = prod.difficulte;
        let tempPreparation = prod.tempPreparation;
        let tempCuisson = prod.tempCuisson;
        let portions = prod.portions;
        }

    // Ajoute le contenu à la carte
    let card = document.querySelector("#result")
    card.innerHTML += `
     <section>
        <h2>RECETTE TOUTES SAISONS</h2>
        <div>
            <h3>Spaghetti bolognaise</h3>
            <ul>
                <li><span>Difficulté:</span>${difficulte}</li>
                <li><span>Portions:</span>${portions}</li>
                <li><span>Temps de préparation:</span>${tempPreparation}</li>
                <li><span>Temps de cuisson:</span>${tempCuisson}</li>
            </ul>
            <div>
                <div>
                    <h4>Ingrédients</h4>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h4></h4>
                    <ol>
                        <li></li>
                    </ol>
                </div>
                <div>
                    <img src="" ${img   }alt="">
                </div>
            </div>
        </div>

    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    `