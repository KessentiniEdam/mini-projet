const loginBox = document.querySelector(".login-box");
const currentUser = JSON.parse(window.localStorage.getItem("current-user"));
if (currentUser?.username)
  loginBox.innerHTML = `
<img src="ena.jpg"  ></img>
<p>${currentUser.username}</p>
`;

let lavageTable = document.querySelector("#lavageTable");
console.log(lavageTable);

let table = document.querySelector(".reparationTable");

let api = `https://v6.exchangerate-api.com/v6/3bc2f59d17b9d8d4a1b80512/latest/:currency`;
const toDropDown = document.getElementById("to-currency-select");
const currencies = ["TND", "USD", "EUR"];

const devise = localStorage.getItem("devise") || "TND";

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

toDropDown.addEventListener("change", () => {
  localStorage.setItem("devise", toDropDown.value);
  getCurrentExchangeRate(toDropDown.value);
});

toDropDown.value = devise;

const getCurrentExchangeRate = async (newDevise) => {
  const res = await fetch(api.replace(":currency", newDevise || devise));
  const data = await res.json();
  let fromExchangeRate = data.conversion_rates["TND"];
  rerenderTableContent(fromExchangeRate, newDevise || devise);
  return fromExchangeRate;
};

const rerenderTableContent = (changeTo, currency) => {
  const tableContent = [
    {
      name: "Changement d'huile",
      amount: 150 * changeTo,
    },
    {
      name: "réparation des freins",
      amount: 500 * changeTo,
    },
    {
      name: "Entretien du système de climatisation",
      amount: 200 * changeTo,
    },
    {
      name: "Remplacement de la batterie",
      amount: 250 * changeTo,
    },
    {
      name: "Réglage du moteur",
      amount: 400 * changeTo,
    },
    {
      name: "Changement des filtres",
      amount: 100 * changeTo,
    },
    {
      name: "Alignement des roues",
      amount: 120 * changeTo,
    },
    {
      name: "Diagnostic électronique",
      amount: 300 * changeTo,
    },
    {
      name: "Réparation du système d'échappement",
      amount: 350 * changeTo,
    },
    {
      name: "changement de courroie",
      amount: 180 * changeTo,
    },
    {
      name: "Réparation de la transmission",
      amount: 600 * changeTo,
    },
    {
      name: "Nettoyage et entretien des injecteurs",
      amount: 220 * changeTo,
    },
  ];
  const lavageTableContent = [
    {
      name: "Lavage à la main",
      description: "Précis et doux pour la peinture",
      amount: 30 * changeTo,
    },
    {
      name: "Lavage automatique",
      description: "Rapide et pratique",
      amount: 20 * changeTo,
    },
  ];

  let tableHtml = "";
  let lavageTableHtml = "";

  tableContent.forEach((ele) => {
    tableHtml += `<tr>
  <td>${ele.name}</td>
  <td>${ele.amount.toFixed(2)} ${currency}</td></tr>`;
  });

  lavageTableContent.forEach((ele) => {
    lavageTableHtml += `<tr>
  <td>${ele.name}</td>
  <td>${ele.description}</td>
  <td>${ele.amount.toFixed(2)} ${currency}</td></tr>`;
  });

  if (table)
    table.innerHTML = `<tr>
  <th>Service</th>
  <th>Coût</th>
</tr>${tableHtml}`;

  if (lavageTable)
    lavageTable.innerHTML = `   <tr>
  <th>Méthode</th>
  <th>Avantages</th>
  <th>Prix</th>
</tr>
  ${lavageTableHtml}`;
};
getCurrentExchangeRate();
