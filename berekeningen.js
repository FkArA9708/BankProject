const users = [
    { username: 'furkankara', password: 'furkan74' },
    { username: 'janpiet', password: 'janpiet'},
    { username: 'admin', password: 'admin123'},
    { username: 'tariq' ,password: 'tariqabbas'},
    { username: 'ahmad' ,password: 'ahmadsaleh'}
];


const username = localStorage.getItem('furkankara', 'janpiet', 'admin', 'tariq', 'ahmad');


if (username) {
    const usernameElement = document.getElementById('gebruikersnaam-rekeningen');
    usernameElement.textContent = username;
} else {
    console.error('Geen gebruikersnaam gevonden in localStorage.');
}


//rekening gedeelte

const nieuweRekeningButton = document.getElementById('nieuwerekening');
const rekeningFormContainer = document.getElementById('rekening-form-container');
const rekeningenLijst = document.getElementById('rekeningen-lijst');

nieuweRekeningButton.addEventListener('click', () => {

rekeningFormContainer.innerHTML = '';

const formHtml = `
        <div id="rekening-form">
            <label for="rekening-naam">Naam van de rekening:</label>
            <input type="text" id="rekening-naam" minlength="1" maxlength="20" required>
            
            <label for="rekening-saldo">Startsaldo:</label>
            <input type="number" id="rekening-saldo" minlength="1" maxlength="8" required>
            
            <button id="betaalrekening-button">Betaalrekening</button>
            <button id="spaarrekening-button">Spaarrekening</button>
        </div>
    `;
    rekeningFormContainer.innerHTML = formHtml;

    document.getElementById('betaalrekening-button').addEventListener('click', () => {
        maakRekening('Betaalrekening');
    });

    document.getElementById('spaarrekening-button').addEventListener('click', () => {
        maakRekening('Spaarrekening');
    });
});

function maakRekening(type) {
    const rekeningNaam = document.getElementById('rekening-naam').value;
    const rekeningSaldo = document.getElementById('rekening-saldo').value;

    if (!rekeningNaam || !rekeningSaldo) {
        alert('Vul alstublieft alle velden in.');
        return;
    }

    const rekeningHtml = `
        <div class="rekening-item">
            <img src="${type === 'Betaalrekening' ? 'images/savings_1030097.png' : 'images/money_3905120.png'}" 
                 alt="${type}" width="90" height="90">
            <h3 id="rekeningNaam">${rekeningNaam}</h3>
            <p id="saldo-id">€${parseFloat(rekeningSaldo).toFixed(2)}</p>
        </div>
    `;

    rekeningenLijst.innerHTML += rekeningHtml;

    rekeningFormContainer.innerHTML = '';
}