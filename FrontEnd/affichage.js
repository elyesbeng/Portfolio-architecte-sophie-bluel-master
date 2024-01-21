const reponse = await fetch("http://localhost:5678/api/works");
const travaux = await reponse.json();

    
for (let i = 0; i < travaux.length; i++) {

    const article = travaux[i];

    const articleElement = document.createElement("figure");

    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    imageElement.alt = article.title

    const nomElement = document.createElement("figcaption");
    nomElement.innerText = article.title;

    const gallery = document.querySelector(".gallery");

    gallery.appendChild(articleElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(nomElement);
    
}

const boutonFiltrer = document.querySelector(".btn-filtrer");
const boutonFiltrer2 = document.querySelector(".btn-filtrer2");
const boutonFiltrer3 = document.querySelector(".btn-filtrer3");
const boutonFiltrer4 = document.querySelector(".btn-filtrer4");


boutonFiltrer.addEventListener("click", function () {
    const travauxFiltres = travaux.filter (function (t) {
        return t.categoryId == 1;
    });
    console.log(travauxFiltres)
});

boutonFiltrer2.addEventListener("click", function () {
    const travauxFiltres = travaux.filter (function (t) {
        return t.categoryId == 2;
    });
    console.log(travauxFiltres)
});

boutonFiltrer3.addEventListener("click", function () {
    const travauxFiltres = travaux.filter (function (t) {
        return t.categoryId == 3;
    });
    console.log(travauxFiltres)
});

boutonFiltrer4.addEventListener("click", function () {
    const travauxFiltres = travaux.filter (function (t) {
        return t.categoryId == 4;
    });
    console.log(travauxFiltres)
        
    }
);

