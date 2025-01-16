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
    const usernameElement = document.getElementById('informatiegebruikercryptovaluta');
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

let imageElement = document.getElementById('afbeeldingresultaatc');

function showError(message) {
    const resultElement = document.getElementById('resultatencryptoc');
    const imageElement = document.getElementById('afbeeldingresultaatc'); 

    if (resultElement && imageElement) {
        resultElement.textContent = message; 
        imageElement.src = 'images/delete-button_5974771.png'; 
        imageElement.alt = 'Fout';  
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
    const resultElement = document.getElementById('resultatencryptoc');
    if (resultElement && imageElement) {
        resultElement.textContent = message;
        imageElement.src = 'images/check_5610944.png'; 
        imageElement.alt = 'Succes';   
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
    const balanceElement = document.getElementById('bedragbeleggingen-waarde-cryptovaluta');
    const priceElement = document.getElementById('huidige-prijsc'); 

    if (balanceElement) {
        balanceElement.textContent = `€${amount.toFixed(2)}`;
    }
    if (priceElement) {
        priceElement.textContent = `€${amount.toFixed(2)}`; 
    }
}

function updateInBezitInfo() {
    const inBezitElement = document.getElementById('inbezitc');
    if (inBezitElement) {
        if (Object.keys(inBezit).length === 0) {
            inBezitElement.textContent = 'Geen investeringen op dit moment.';
        } else {
            setInterval(() => {
                const updatedContent = Object.entries(inBezit)
                    .map(([crypto, bedrag]) => {
                        const fluctuation = (Math.random() - 0.5) * 0.2; 
                        const fluctuatedBedrag = bedrag + fluctuation;
                        return `<div>${crypto}: €${fluctuatedBedrag.toFixed(2)}</div>`;
                    })
                    .join('');
                inBezitElement.innerHTML = updatedContent;
            }, 3000); 
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.querySelector('#inputbedragbeleggingenc');
    const sellButton = document.querySelector('#buttonverkopenc');
    const buyButton = document.querySelector('#buttonkopenc');
    const cryptoElement = document.querySelector('#productenopties-crypto');

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

            
            const unitPrice = getCryptoPrice(crypto); 
            const totalUnits = (inputValue / unitPrice).toFixed(4); 

            showResult(`Je hebt €${inputValue.toFixed(2)} geïnvesteerd in ${crypto}: ${totalUnits} eenheden.`);
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

            
            const unitPrice = getCryptoPrice(crypto); 
            const totalUnits = (inputValue / unitPrice).toFixed(4); 

            showResult(`Je hebt €${inputValue.toFixed(2)} verkocht aan ${crypto}: ${totalUnits} eenheden.`);
            updateBalance();
            updateInBezitInfo();
        });
    }
});


function getCryptoPrice(crypto) {
    const prices = {
        bitcoin: 90000, 
        etherium: 2000, 
        litecoin: 100, 
        wrappedbitcoin: 90000 
    };

    return prices[crypto] || 0; 
}
