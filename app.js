function ajouterapprenant() {
const champ = document.getElementById("nom");
const nom = champ.value.trim();
12
if (nom === "") {
alert("Veuillez saisir un nom.");
return;
}
const element = document.createElement("li");
element.textContent = nom;
document.getElementById("liste").appendChild(element);
champ.value = "";
}