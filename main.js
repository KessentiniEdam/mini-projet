const loginBox = document.querySelector(".login-box")
const table = document.querySelector(".service-table")

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
tableHtml= tableContent.map((ele)=>`<tr>
<td>${ele.name}</td>
<td>${ele.amount}</td></tr>`)

            console.log({tableHtml });
const currentUser = JSON.parse(window.localStorage.getItem("current-user"))
if(currentUser?.username) 
loginBox.innerHTML = `
<img src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg" ></img>
<p>${currentUser?.username}</p>
`;
