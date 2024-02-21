const reponse = await fetch('http://localhost:5678/api/works');
const travaux = await reponse.json();
/**Affichage des travaux */
const gallery = document.querySelector(".gallery");
function creationTravaux(travaux){
for (let i = 0; i < travaux.length; i++) {

    const article = travaux[i];

    const articleElement = document.createElement("figure");
    articleElement.id = "figure" + article.id;
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    imageElement.alt = article.title;
    articleElement.className = "figureGallery";

    const nomElement = document.createElement("figcaption");
    nomElement.innerText = article.title;


    gallery.appendChild(articleElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(nomElement);
    
}
}

creationTravaux(travaux);

/**Assiagnement des boutons */

const boutonFiltre = document.querySelector(".btn-filtre");
const boutonFiltrer2 = document.querySelector(".btn-filtrer2");
const boutonFiltrer3 = document.querySelector(".btn-filtrer3");
const boutonFiltrer4 = document.querySelector(".btn-filtrer4");

function changementCouleur(){
    element.style.backgroundColor = '#1D6154';
    element.style.color='white';
}

function changementCouleur2(){
    element.style.backgroundColor = 'white';
    element.style.color='#1d6154';
}

/**Creation des filtres et mise a jour de l'affichage des travaux */

boutonFiltre.addEventListener("click", function () {
    const travauxFiltres = travaux.filter (function (t) {
        return travaux;
    });
    boutonFiltre.style.backgroundColor='#1D6154';
    boutonFiltre.style.color='white';

    boutonFiltrer2.style.backgroundColor='white';
    boutonFiltrer2.style.color='#1D6154';

    boutonFiltrer3.style.backgroundColor='white';
    boutonFiltrer3.style.color='#1D6154';

    boutonFiltrer4.style.backgroundColor='white';
    boutonFiltrer4.style.color='#1D6154';

    console.log(travauxFiltres)
    document.querySelector(".gallery").innerHTML = "";
    creationTravaux(travauxFiltres);
});


boutonFiltrer2.addEventListener("click", function () {
    const travauxFiltres = travaux.filter (function (t) {
        return t.categoryId == 1;
    });
    boutonFiltrer2.style.backgroundColor='#1D6154';
    boutonFiltrer2.style.color='white';

    boutonFiltre.style.backgroundColor='white';
    boutonFiltre.style.color='#1D6154';

    boutonFiltrer3.style.backgroundColor='white';
    boutonFiltrer3.style.color='#1D6154';

    boutonFiltrer4.style.backgroundColor='white';
    boutonFiltrer4.style.color='#1D6154';


    console.log(travauxFiltres)
    document.querySelector(".gallery").innerHTML = "";
    creationTravaux(travauxFiltres);
});

boutonFiltrer3.addEventListener("click", function () {
    const travauxFiltres = travaux.filter (function (t) {
        return t.categoryId == 2;
    });


    boutonFiltrer3.style.backgroundColor='#1D6154';
    boutonFiltrer3.style.color='white';

    boutonFiltrer2.style.backgroundColor='white';
    boutonFiltrer2.style.color='#1D6154';

    boutonFiltre.style.backgroundColor='white';
    boutonFiltre.style.color='#1D6154';

    boutonFiltrer4.style.backgroundColor='white';
    boutonFiltrer4.style.color='#1D6154';


    console.log(travauxFiltres)
    document.querySelector(".gallery").innerHTML = "";
    creationTravaux(travauxFiltres);
});

boutonFiltrer4.addEventListener("click", function () {
    const travauxFiltres = travaux.filter (function (t) {
        return t.categoryId == 3;
    });


    boutonFiltrer4.style.backgroundColor='#1D6154';
    boutonFiltrer4.style.color='white';

    boutonFiltrer2.style.backgroundColor='white';
    boutonFiltrer2.style.color='#1D6154';

    boutonFiltrer3.style.backgroundColor='white';
    boutonFiltrer3.style.color='#1D6154';

    boutonFiltre.style.backgroundColor='white';
    boutonFiltre.style.color='#1D6154';


    console.log(travauxFiltres)

    document.querySelector(".gallery").innerHTML = "";
    creationTravaux(travauxFiltres);
        
    }
);

const enteteConnectee = document.querySelector(".entete-connectee");
const ouvertureModale = document.querySelector(".bouton-ouverture-modale");
const boutonLogin = document.querySelector(".login");
const boutonsFiltres = document.querySelector(".filtres");

/**recuperation du token */

const token = localStorage.getItem("token");
console.log(token);
if (token !== null && token !== "") {
    
    enteteConnectee.style.display = "flex";
    ouvertureModale.style.display = "block";
    boutonLogin.innerHTML = "logout";
    boutonLogin.addEventListener('click', function(){
        localStorage.removeItem("token");
        window.location.href='http://127.0.0.1:5500/index.html'
    })
    boutonsFiltres.style.display = "none";
    console.log(token);
} else {
    
    enteteConnectee.style.display = "none";
    console.log("token");
};

/**FENETRE MODALE*/

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const galleryModal= document.querySelector(".gallery-modal");
const modalContainer2 = document.querySelector(".modal-container2");

/**apparition de la fentre modale */

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

/**Creation des travaux dans la fenetre modale */

function creationTravaux2(travaux){
    for (let i = 0; i < travaux.length; i++) {
    
        const article = travaux[i];
    
        const articleElement = document.createElement("figure");
        articleElement.className = 'figure-travaux';
        articleElement.id = "figure" + article.id;
        articleElement.style.position = "relative";
        const imageElement = document.createElement("img");
        imageElement.src = article.imageUrl;
        imageElement.alt = article.title;
        const btnSupprimer = document.createElement("button");
        btnSupprimer.className = "bouton-supprimer-travaux";
        const btnSupprimerIcone = document.createElement("i");
        btnSupprimerIcone.className = "fa-solid fa-trash";
    
        articleElement.style.width = 'auto';
        articleElement.style.height = '10%';
        imageElement.style.height = '100px';
    
        galleryModal.appendChild(articleElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(btnSupprimer);
        btnSupprimer.appendChild(btnSupprimerIcone);
        
        btnSupprimer.addEventListener('click', function() {
            const token = window.localStorage.getItem("token");
            const reponseSuppression = fetch('http://localhost:5678/api/works/'+article.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                        
                },
            });
            console.log(article.id);
            articleElement.remove(article.id);
            var elementASupprimer = document.getElementById("figure" + article.id);
                if (elementASupprimer) {
                    elementASupprimer.remove();
                } else {
                    console.log("L'élément avec l'ID spécifié n'existe pas dans le DOM.");
                };
        });
        
    }

    
}
creationTravaux2(travaux);

function toggleModal(){
    modalContainer.classList.toggle("active");
  
}



/** Creation du formulaire pour l'ajout des travaux */

function createFormulaireModal(){

    // Changement du titre
    const titreModale = document.querySelector("#modalTitle");
    titreModale.innerHTML = "Ajoutez une photo";
    // Création du formulaire
    var formulaire = document.createElement('form');
    formulaire.className = "formulaire-modale";

    
    // Création de l'élément input pour l'image
    var inputImage = document.createElement('input');
    var labelImage = document.createElement('label');
    var texteLabelImage = document.createElement('div');
    var texteLabelImage2 = document.createElement('div');
    var texteLabelImage3 = document.createElement('div');
    inputImage.id = "inputImage";
    texteLabelImage.innerHTML = '<i class="fa-solid fa-image"></i>';
    texteLabelImage2.innerHTML = 'Ajoutez une photo';
    texteLabelImage3.innerHTML = 'jpg, png 4mo max';
    texteLabelImage.className = 'FA-labelImage';
    texteLabelImage2.className = "labelImage-button";
    texteLabelImage3.style.alignSelf = "center";
    labelImage.appendChild(texteLabelImage);
    labelImage.appendChild(texteLabelImage2);
    labelImage.appendChild(texteLabelImage3);

    labelImage.className = "labelImage";
    labelImage.setAttribute ("for", "inputImage");
    inputImage.style.height = '169px'
    inputImage.type = 'file'; // Type de champ fichier pour choisir une image
    inputImage.name = 'image';
    inputImage.required = true; // Champ requis
    var apercuImage = document.createElement('img');
    apercuImage.id = 'apercuImage';
    apercuImage.src = '#';
    apercuImage.alt = 'Aperçu de l\'image';
    apercuImage.style.display = 'none';
    formulaire.appendChild(inputImage);
    formulaire.appendChild(labelImage);
    labelImage.appendChild(apercuImage);
    inputImage.addEventListener('change', function() {
        var fichier = inputImage.files[0]; // Récupérer le premier fichier sélectionné
    
        // Vérifier si un fichier a été sélectionné
        if (fichier) {
            // Créer un objet URL pour le fichier sélectionné
            var urlImage = URL.createObjectURL(fichier);
            // Afficher l'aperçu de l'image
            apercuImage.src = urlImage;
            apercuImage.style.display = 'inline';
            texteLabelImage.style.display = "none";
            texteLabelImage2.style.display = "none";
            texteLabelImage3.style.display = "none";
            
        } else {
            // Cacher l'aperçu de l'image s'il n'y a pas de fichier sélectionné
            apercuImage.src = '#';
            apercuImage.style.display = 'none';
        }
    });
    
    // Création de l'élément input pour le titre
    var inputTitre = document.createElement('input');
    inputTitre.className = "input-modal";
    inputTitre.type = 'text'; // Type de champ texte
    inputTitre.placeholder = 'Titre';
    inputTitre.name = 'titre';
    inputTitre.required = true; // Champ requis
    formulaire.appendChild(inputTitre);
    
    // Création de l'élément input pour la catégorie
    var selectCategorie = document.createElement('select');
    selectCategorie.className = "select-modal";
    selectCategorie.placeholder = 'Catégorie';
    selectCategorie.name = 'categorie';
    selectCategorie.style.height = "35px";
    selectCategorie.required = true; // Champ requis
    formulaire.appendChild(selectCategorie);
    var options = ["Objets", "Appartement", "Hotels & Restaurants"];
    options.forEach(function(optionText, index) {
        var optionCategorie = document.createElement("option");
        optionCategorie.value = index + 1; // Les valeurs commencent à partir de 1
        optionCategorie.text = optionText;
        selectCategorie.appendChild(optionCategorie);
    });
    
    // Création du bouton de soumission
    var boutonSubmit = document.createElement('div');
    boutonSubmit.textContent = 'Soumettre';
    boutonSubmit.className = "bouton-ajout-travaux ";
    formulaire.appendChild(boutonSubmit);
    boutonSubmit.style.alignSelf = "center";
    boutonSubmit.addEventListener("click", function() {
        console.log(inputTitre.value);
        console.log(inputImage.files[0]);
        console.log(selectCategorie.value); 
        // Créer un objet pour stocker les informations du formulaire
        /**var NouveauTravail = {
            title: titreImage,
            image: ImageTravail,
            categoryId: CategorieImage,
            userId: 1,
            category: options[CategorieImage]
        };

        const token = window.localStorage.getItem("token");
            const reponseajout = fetch('http://localhost:5678/api/works/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                        
                },
            });
            travaux.push(NouveauTravail);*/

            const formData = new FormData();
            formData.append('image', inputImage.files[0]);
            formData.append('title', inputTitre.value);
            formData.append('category', selectCategorie.value);
            async function postData() {
                try {
                    const response2 = await fetch("http://localhost:5678/api/works", {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        },
                        body: formData
                    });
                    
                    if (response2.status === 201) {
                        console.log('La création a réussi.');
            
                        // Créer les éléments HTML pour le nouveau travail
                        const articleElement = document.createElement("figure");
                        const imageElement = document.createElement("img");
                        const nomElement = document.createElement("figcaption");
            
                        // Assigner les attributs et le contenu aux éléments
                        articleElement.id = "figure" + (travaux.length + 1);
                        const reponseJSON = await response2.json();
                        console.log(reponseJSON);
                        imageElement.src = reponseJSON.imageUrl;
                        imageElement.alt = inputTitre.value;
                        nomElement.innerText = inputTitre.value;
                        labelImage.innerText = "";
                        const articleElementMODAL = document.createElement("figure");
                        articleElementMODAL.className = 'figure-travaux';
                        articleElementMODAL.id = "figure" + articleElementMODAL.id;
                        articleElementMODAL.style.position = "relative";
                        const imageElementMODAL = document.createElement("img");
                        imageElementMODAL.src = reponseJSON.imageUrl;
                        imageElementMODAL.alt = inputTitre.title;
                        const btnSupprimer = document.createElement("button");
                        btnSupprimer.className = "bouton-supprimer-travaux";
                        const btnSupprimerIcone = document.createElement("i");
                        btnSupprimerIcone.className = "fa-solid fa-trash";
                        btnSupprimer.appendChild(btnSupprimerIcone);
                        btnSupprimer.addEventListener('click', function() {
                            const token = window.localStorage.getItem("token");
                            const reponseSuppression = fetch('http://localhost:5678/api/works/'+articleElementMODAL.id, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer '+token
                                        
                                },
                            })
                        });
                        articleElementMODAL.appendChild(imageElementMODAL);
                        articleElementMODAL.appendChild(btnSupprimer);
    

            
                        // Ajouter les éléments au DOM
                        articleElement.appendChild(imageElement);
                        articleElement.appendChild(nomElement);
                        document.querySelector(".gallery-modal").appendChild(articleElementMODAL);
                        document.querySelector(".gallery").appendChild(articleElement); // Ajoutez cet élément à votre conteneur de travaux existant
                        retourModale();
                    } else {
                        console.log("Erreur dans l'ajout" + reponse2);
                        // Ne rien faire ou effectuer d'autres actions nécessaires
                    }
                } catch (error) {
                    console.error('Erreur lors de la requête :', error);
                }
            }
            
            // Appel de la fonction postData
            postData();
        });
        formulaireAjoutModale.appendChild(formulaire);
    };


    
    
    ;
    console.log(travaux);

const formulaireAjoutModale = document.querySelector(".formulaire-ajout-travaux");
const boutonRetourModale = document.querySelector(".bouton-retour");
const formulaireAjoutTravauxRetour = document.querySelector(".formulaire-ajout-travaux-retour");

function changementDisplay(){
    galleryModal.style.display = 'none';
    formulaireAjoutModale.style.display = 'flex';
    formulaireAjoutTravauxRetour.style.display = 'flex';
};

function retourModale(){
    galleryModal.style.display = 'flex';
    formulaireAjoutModale.style.display = 'none';
    formulaireAjoutTravauxRetour.style.display = 'none';
    const btnAjoutTravaux = document.querySelector(".ajout-travaux-btn");
    btnAjoutTravaux.style.display = 'block';
};
  
const btnAjoutTravaux = document.querySelector(".ajout-travaux-btn");
const modalTitle = document.getElementById("#modalTitle");
btnAjoutTravaux.addEventListener("click", function(){
    changementDisplay(galleryModal);
    changementDisplay(formulaireAjoutModale);
    createFormulaireModal();
    btnAjoutTravaux.style.display = 'none';

});

boutonRetourModale.addEventListener("click", function(){
    btnAjoutTravaux.style.display = 'block';
    retourModale(galleryModal);
    formulaireAjoutModale.innerHTML = "";       
});

/** Envoi du formulaire ajout des nouveaux elements a la liste "travaux" */
