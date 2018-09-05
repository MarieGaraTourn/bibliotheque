//Fonction qui ajoute les entrees dans la liste affichee via un bouton
console.log(document.getElementById("title").value);
function addToList() {
  var list = document.getElementById("table");
  var row = list.insertRow(1);
  var td1 = row.insertCell(0);
  var td2 = row.insertCell(1);
  var td3 = row.insertCell(2);

  var inputValue1 = document.getElementById("title").value;
  var inputValue2 = document.getElementById("author").value;
  var inputValue3 = document.getElementById("isbn").value;
  
  
  if (inputValue1 ==='' || inputValue2 ==='' || inputValue3 ==='') {
   alert("Le champ de saisie est vide");
 }
 else {
  td1.innerHTML = document.getElementById("title").value;
  td2.innerHTML = document.getElementById("author").value;
  td3.innerHTML = document.getElementById("isbn").value;
}


  //to delete rows which have been previously added 
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  row.appendChild(span);
 

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var row = this.parentElement;
      row.remove();
    }
  }

}

//Fonction qui supprime un élément de la liste
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
   var row = this.parentElement;
   row.remove();
 }
}


//Fonction qui va chercher la liste de livre api au format json 
//Recuperation des infos contenues dans le json
//Affichage des infos sur le HTML
/*(function remplissage(){
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', "https://api.scorelooker.com/books", true);
  xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200){
      var reponse = xhttp.responseText;
      var arrayJson = JSON.parse(reponse);//permet de creer des objets de JSON
      convertJson(arrayJson);//permet de creer un tableau dobjet
    }
  };
  xhttp.send();
})();

function convertJson(arr){
  var out = "";
  var tab = [];
    for(let i = 0; i < arr.length; i++) {
     out += '<a href="' + arr[i].url + '">' + 
      arr[i].display + '</a><br>';
    }
    for (let i=0; i<10; i++){
 console.log(arr[i].titre);
  //tab.push(arr[i].titre);
  }
 //console.table(tab);
}*/

    //Stockage en local du tableau de nom choisi dans les objets
   /* localStorage.setItem("arrayList", JSON.stringify(tab));//stockage des infos en local
    var storedArray = JSON.parse(localStorage.getItem("tab"));//pour la lecture des infos stockees
    console.table(storedArray);//affichage console sous forme de liste*/

