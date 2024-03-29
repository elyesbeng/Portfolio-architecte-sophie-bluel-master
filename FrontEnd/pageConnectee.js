const reponse = await fetch('http://localhost:5678/api/works');
const travaux = await reponse.json();
/**Affichage des travaux */
function creationTravaux(travaux){
for (let i = 0; i < travaux.length; i++) {

    const article = travaux[i];

    const articleElement = document.createElement("figure");
    articleElement.id = "figure" + article.id;
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    imageElement.alt = article.title;

    const nomElement = document.createElement("figcaption");
    nomElement.innerText = article.title;

    const gallery = document.querySelector(".gallery");

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

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const galleryModal= document.querySelector(".gallery-modal");
const modalContainer2 = document.querySelector(".modal-container2");


modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function creationTravaux2(travaux){
    for (let i = 0; i < travaux.length; i++) {
    
        const article = travaux[i];
    
        const articleElement = document.createElement("figure");
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
        
        
    }

    
}
creationTravaux2(travaux);

const token = window.localStorage.getItem("token");
const reponseSuppression = fetch('http://localhost:5678/api/works'+btnSupprimer.id, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
    },
})

function toggleModal(){
    modalContainer.classList.toggle("active");
  
}

function toggleModal2(){

    const ModalTitle =document.querySelector("modalTitle");
    ModalTitle.innerHTML ="";
    galleryModal.innerHTML = "";
    
    const formulaireAjoutTravaux = document.createElement("form");
    const ajoutImage = document.createElement("input");
    const label = document.createElement ("label");
    const ajoutTitre = document.createElement("input");
    const ajoutCategorie = document.createElement("input");

    ajoutImage.type = "file";
    ajoutImage.id = "ajoutImage";

    
}

const btnAjoutTravaux = document.querySelector(".ajout-travaux-btn");
btnAjoutTravaux.addEventListener("click",toggleModal2);

