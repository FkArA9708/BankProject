
const username = localStorage.getItem('furkankara', 'janpiet', 'admin', 'tariq', 'ahmad');


if (username) {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Welkom, ${username}.`;

    const usernameElement = document.getElementById('gebruikersnaam');
    usernameElement.textContent = username;
} else {
    console.error('Geen gebruikersnaam gevonden in localStorage.');
}










// Functie om knoppen te laten werken
document.getElementById('notificaties').addEventListener('click', () => {
    alert('Notificaties worden geladen...');
});

document.getElementById('berichten').addEventListener('click', () => {
    alert('Berichten worden geladen...');
});

document.getElementById('instellingen').addEventListener('click', () => {
    alert('Instellingen worden geladen...');
});







function updateSaldo() {
    const saldoElement = document.getElementById('bedrag');
    const storedSaldo = parseFloat(localStorage.getItem('saldo')) || 184.96; // Standaard saldo
    saldoElement.textContent = `€${storedSaldo.toFixed(2)}`;
}

// Update saldo na transactie
function transactiesaldoUpdate(amount) {
    let currentSaldo = parseFloat(localStorage.getItem('saldo')) || 184.96;
    currentSaldo += amount;
    localStorage.setItem('saldo', currentSaldo);
    updateSaldo();
}

// Initialiseer het saldo bij het laden van de pagina
updateSaldo();



function toonInvesteringen() {
    const investeringenSectie = document.createElement('div');
    investeringenSectie.innerHTML = `
        <h2>Investeringen</h2>
        <ul>
            <li>Apple aandelen: 5 stuks <span class="geld">€750</span></li>
            <li>Bitcoin: 0.01 BTC <span class="geld">€250</span></li>
            <li>Ethereum: 0.05 ETH <span class="geld">€100</span></li>
        </ul>
    `;
    investeringenSectie.style.border = '1px solid #E8F2FB';
    investeringenSectie.style.padding = '20px';
    investeringenSectie.style.margin = '20px 0';
    document.body.appendChild(investeringenSectie);
}

// Voeg investeringen toe na pagina-laden
window.addEventListener('load', toonInvesteringen);



const transacties = JSON.parse(localStorage.getItem('transacties')) || [
    { naam: 'Thuisbezorgd', bedrag: 18.96 },
    { naam: 'Zilveren Kruis', bedrag: 120.76 },
    { naam: 'Kruidvat', bedrag: 6.85 },
    { naam: 'Zeeman', bedrag: 8.97 },
];

function laadTransacties() {
    const lijst = document.querySelector('.betaalrekening');
    lijst.innerHTML = transacties.map(
        t => `<li>${t.naam} <span class="geld">${t.bedrag.toFixed(2)} EUR</span></li>`
    ).join('');
}

laadTransacties();
