let boutonAccueil = document.getElementById("messageAccueil");
let milieuPage = document.getElementById("milieuPage");

boutonAccueil.onclick = function() {

milieuPage.style.display='block';
boutonAccueil.style.display='none';

}

setTimeout(function() { alert("Hey le site xxxvidsxxx est trop bien, Viens dessus stp please") }, 10000);


let adresseInput = document.getElementById("champ").value;

let boutonRecherche = document.getElementById("boutonRecherche");

boutonRecherche.onclick = function () {

document.location.href="https://www.google.fr/#q=" + adresseInput;

}

