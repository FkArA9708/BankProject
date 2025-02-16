// GEBRUIKERS
const users = [
    { username: 'furkankara', password: 'furkan74' },
    { username: 'janpiet', password: 'janpiet' },
    { username: 'admin', password: 'admin123' },
    { username: 'tariq', password: 'tariqabbas' },
    { username: 'ahmad', password: 'ahmadsaleh' }
];


const storedUsername = localStorage.getItem('furkankara' , 'janpiet', 'admin', 'tariq', 'ahmad');
if (storedUsername) {
    const usernameElement = document.getElementById('gebruikersnaam-beleggingen');
    if (usernameElement) {
        usernameElement.textContent = storedUsername;
    }
}
// SALDO

let amount = 184.96; 
let inBezit = {}; 

document.addEventListener('DOMContentLoaded', () => {
   
    updateBalance();
    updateInBezitInfo();
});

// RESULTATEN

let imageElement = document.getElementById('afbeeldingresultaat');

function showError(message) {
    const resultElement = document.getElementById('resultatenbeleggingen');
    const imageElement = document.getElementById('afbeeldingresultaat'); 

    if (resultElement && imageElement) {
        resultElement.textContent = message; 
        imageElement.src = 'images/delete-button_5974771.png'; 
        imageElement.alt = 'Fout';  //BEN HIER GEBLEVEN
        imageElement.style.width = '50px';
        imageElement.style.height = '50px';
        imageElement.style.fontFamily = 'molde, sans-serif';
        imageElement.style.position = 'relative';
        imageElement.style.marginLeft = '51px';
        imageElement.style.bottom = '34px';
        imageElement.style.display = 'flex';
        imageElement.style.gap = '20px';
    }
}


function showResult(message) {
    const resultElement = document.getElementById('resultatenbeleggingen');
    if (resultElement && imageElement) {
        resultElement.textContent = message;
        imageElement.src = 'images/check_5610944.png'; 
        imageElement.alt = 'Succes';   //BEN HIER GEBLEVEN
        imageElement.style.width = '50px';
        imageElement.style.height = '50px';
        imageElement.style.fontFamily = 'molde, sans-serif';
        imageElement.style.position = 'relative';
        imageElement.style.marginLeft = '51px';
        imageElement.style.bottom = '34px';
        imageElement.style.display = 'flex';
        imageElement.style.gap = '20px';
    }
}


function updateBalance() {
    const balanceElement = document.getElementById('bedragbeleggingen-waarde');
    const priceElement = document.getElementById('huidige-prijs'); 

    if (balanceElement) {
        balanceElement.textContent = `€${amount.toFixed(2)}`;
    }
    if (priceElement) {
        priceElement.textContent = `€${amount.toFixed(2)}`; 
    }
}



function updateInBezitInfo() {
    const inBezitElement = document.getElementById('inbezit');
    if (inBezitElement) {
        if (Object.keys(inBezit).length === 0) {
            inBezitElement.textContent = 'Geen investeringen op dit moment.';
        } else {
            inBezitElement.innerHTML = Object.entries(inBezit)
                .map(([crypto, bedrag]) => `${crypto}: €${bedrag.toFixed(2)}`)
                .join('<br>');
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.querySelector('#inputbedragbeleggingen');
    const sellButton = document.querySelector('#buttonverkopen');
    const buyButton = document.querySelector('#buttonkopen');
    const cryptoElement = document.querySelector('#productenopties');

    if (inputElement && sellButton && buyButton && cryptoElement) {
       
        buyButton.addEventListener('click', () => {
            const inputValue = parseFloat(inputElement.value);
            const crypto = cryptoElement.value;

            if (isNaN(inputValue) || inputValue <= 0) {
                showError('Vul een juist bedrag in.');
                return;
            }

            if (inputValue > amount) {
                showError('Onvoldoende saldo.');
                return;
            }

           
            amount -= inputValue;
            inBezit[crypto] = (inBezit[crypto] || 0) + inputValue;

            showResult(`Je hebt €${inputValue.toFixed(2)} geïnvesteerd in ${crypto}.`);
            updateBalance();
            updateInBezitInfo();
            
        });

        
        sellButton.addEventListener('click', () => {
            const inputValue = parseFloat(inputElement.value);
            const crypto = cryptoElement.value;

            if (isNaN(inputValue) || inputValue <= 0) {
                showError('Vul een juist bedrag in.');
                return;
            }

            if (!inBezit[crypto] || inBezit[crypto] < inputValue) {
                showError(`Onvoldoende bezit in ${crypto}.`);
                return;
            }

            
            inBezit[crypto] -= inputValue;
            if (inBezit[crypto] === 0) {
                delete inBezit[crypto]; 
            }

            amount += inputValue;

            showResult(`Je hebt €${inputValue.toFixed(2)} verkocht aan ${crypto}.`);
            updateBalance();
            updateInBezitInfo();
        });
    }
});
