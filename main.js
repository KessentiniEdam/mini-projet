const loginBox = document.querySelector(".login-box")
const currentUser = JSON.parse(window.localStorage.getItem("current-user"))
if(currentUser.username) 
loginBox.innerHTML = `
<img src="ena.jpg"  ></img>
<p>${currentUser.username}</p>
`;


let lavageTable = document.querySelector("#lavageTable")   
 console.log(lavageTable);

let reparationTable = document.querySelector(".reparationTable")

// OR Option 2: Move the script tag to just before the closing </body> tag

let api = `https://v6.exchangerate-api.com/v6/3bc2f59d17b9d8d4a1b80512/latest/USD`;
const toDropDown = document.getElementById("to-currency-select");
const currencies = ["TND","USD","EUR"]; 

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);

  });
 
toDropDown.addEventListener("change", () => {
    localStorage.setItem("devise", toDropDown.value);
});
//toDropDown.value=localStorage.getItem("devise");
  /////
 

fetch(api)
  .then((resp) => resp.json())
  .then((data) => {
          let fromExchangeRate = data.conversion_rates["TND"];
          let toExchangeRate = data.conversion_rates[localStorage.getItem("devise")];



          function convertirPrix(table, prixColumnIndex) {
            const rows = table.querySelectorAll("tr");
        
            rows.forEach((row) => {
                // Ignorer les lignes contenant des cellules <th> (l'en-tête)
                if (row.querySelector("th")) return;
        
                // Sélectionner la cellule de la colonne des prix
                const prixCell = row.querySelector(`td:nth-of-type(${prixColumnIndex})`);
                if (prixCell) {
                    // Extraire le prix, enlever " TND" ou " dt", et convertir en nombre
                    const prixEnTND = parseFloat(prixCell.textContent.replace(/[^\d.]/g, ''));
                    const prix = ((prixEnTND / fromExchangeRate) * toExchangeRate).toFixed(2);
        
        
                    // Mettre à jour le contenu de la cellule avec le prix en USD
                    prixCell.innerHTML = `${prix} ${localStorage.getItem("devise")}`;
                }
            });
        }
        
        convertirPrix(reparationTable,2)
        convertirPrix(lavageTable,3)
        }); 
      
        
         // result.innerHTML = ` ${convertedAmount.toFixed(2)} ${localStorage.getItem("devise")}`;
 
  
  
  


/*
const tableContent = [
    {
        name : "Changement d'huile",
        amount : 150
    }
    ,
    {
        name : "réparation des freins",
        amount : 500
    }
    ,
    {
        name : "Entretien du système de climatisation",
        amount : 200
    }
    ,
    {
        name : "Remplacement de la batterie",
        amount : 250
    }
    ,
    {
        name : "Réglage du moteur",
        amount : 400
    }
    ,
    {
        name : "Changement des filtres",
        amount : 100
    }
    , {
        name : "Alignement des roues",
        amount : 120
    }
    ,
    {
        name : "Diagnostic électronique",
        amount : 300
    }
    ,
    {
        name : "Réparation du système d'échappement",
        amount : 350
    }
    ,
    {
        name : "changement de courroie",
        amount : 180
    },
    {
        name : "Réparation de la transmission",
        amount : 600
    },
    {
        name : "Nettoyage et entretien des injecteurs",
        amount : 220
    },
]
let tableHtml=''
 tableContent.forEach((ele)=>{
    tableHtml+=  `<tr>
<td>${ele.name}</td>
<td>${ele.amount}</td></tr>`
})
table.innerHTML = tableHtml
*/