
const transferForm = document.getElementById('transferForm');
const feedback = document.getElementById('feedback');


const accounts = {
    "furkan": 150, 
    "spaarrekening": 500
};

transferForm.addEventListener('submit', (event) => {
    event.preventDefault();

  
    const fromAccount = document.getElementById('fromAccount').value.trim();
    const toAccount = document.getElementById('toAccount').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);

    
    if (!accounts[fromAccount]) {
        displayFeedback('Fout: Van rekening bestaat niet.', false);
        feedback.style.fontFamily = 'molde, sans-serif';
        feedback.style.position = 'relative';
        feedback.style.left = '101px';
        feedback.style.top = '10px';
        feedback.style.display = 'flex';
        feedback.style.gap = '20px';
        return;
    }

    if (!accounts[toAccount]) {
        displayFeedback('Fout: Naar rekening bestaat niet.', false);
        feedback.style.fontFamily = 'molde, sans-serif';
        feedback.style.position = 'relative';
        feedback.style.left = '101px';
        feedback.style.top = '10px';
        feedback.style.display = 'flex';
        feedback.style.gap = '20px';
        return;
    }

   
    if (amount <= 0 || isNaN(amount)) {
        displayFeedback('Fout: Voer een geldig bedrag in.', false);
        feedback.style.fontFamily = 'molde, sans-serif';
        feedback.style.position = 'relative';
        feedback.style.left = '101px';
        feedback.style.top = '10px';
        feedback.style.display = 'flex';
        feedback.style.gap = '20px';
        return;
    }


    if (accounts[fromAccount] < amount) {
        displayFeedback('Fout: Onvoldoende saldo.', false);
        feedback.style.fontFamily = 'molde, sans-serif';
        feedback.style.position = 'relative';
        feedback.style.left = '101px';
        feedback.style.top = '10px';
        feedback.style.display = 'flex';
        feedback.style.gap = '20px';
        return;
    }


    accounts[fromAccount] -= amount;
    accounts[toAccount] += amount;

    
    displayFeedback(`Transactie geslaagd. ${amount.toFixed(2)} Euro overgeschreven van ${fromAccount} naar ${toAccount}.`, true);
    feedback.style.fontFamily = 'molde, sans-serif';
    feedback.style.position = 'relative';
    feedback.style.left = '101px';
     feedback.style.top = '10px';
    feedback.style.display = 'flex';
    feedback.style.gap = '20px';
});

function displayFeedback(message, isSuccess) {
    feedback.innerHTML = '';
    feedback.style.color = isSuccess ? '#1B5A8C' : '#1B5A8C';

    const text = document.createElement('p');
    text.textContent = message;
    feedback.appendChild(text);

    const image = document.createElement('img');
    if (isSuccess) {
        image.src = 'images/check_5610944.png'; 
        image.alt = 'Succes';
    } else {
        image.src = 'images/delete-button_5974771.png'; 
        image.alt = 'Fout';
    }

    image.style.width = '50px';
    feedback.appendChild(image);
}
