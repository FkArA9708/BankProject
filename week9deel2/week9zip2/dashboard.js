
const username = localStorage.getItem('furkankara', 'janpiet', 'admin', 'tariq', 'ahmad');


if (username) {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Welkom, ${username}.`;

    const usernameElement = document.getElementById('gebruikersnaam');
    usernameElement.textContent = username;
} else {
    console.error('Geen gebruikersnaam gevonden in localStorage.');
}











function createModal(contentType) {
    const overlay = document.createElement('div');
    overlay.style = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const modal = document.createElement('div');
    modal.style = `
        background: rgba(232, 242, 251, 0.95);
        padding: 30px;
        border-radius: 15px;
        width: 80%;
        max-width: 500px;
        position: relative;
        color: #1B5A8C;
        font-family: 'molde', sans-serif;
        border: 2px solid #1B5A8C;
        max-height: 80vh;
        overflow-y: auto;
    `;

    // Initialize or get stored data
    const messageData = JSON.parse(localStorage.getItem('messages')) || [];
    const settingsData = JSON.parse(localStorage.getItem('userSettings')) || {
        notifications: true,
        securityLevel: 'medium',
        theme: 'light'
    };

    let modalContent;
    switch(contentType) {
        case 'notificaties':
            modalContent = `
                <h2 style="margin-top: 0; color: #1B5A8C;">Notificaties</h2>
                <ul id="notification-list" style="list-style: none; padding: 0;">
                    ${messageData.filter(m => m.type === 'notification').map((msg, index) => `
                        <li data-index="${index}" style="padding: 10px; border-bottom: 1px solid #1B5A8C; 
                            cursor: pointer; ${!msg.read ? 'font-weight: bold;' : ''}">
                            ${msg.title}
                            <div style="display: none; margin-top: 5px; font-weight: normal;">
                                ${msg.content}
                                <small style="display: block; color: #666; margin-top: 5px;">
                                    ${new Date(msg.date).toLocaleString()}
                                </small>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            `;
            break;

        case 'berichten':
            modalContent = `
                <h2 style="margin-top: 0; color: #1B5A8C;">Berichten</h2>
                <ul id="message-list" style="list-style: none; padding: 0;">
                    ${messageData.filter(m => m.type === 'message').map((msg, index) => `
                        <li data-index="${index}" style="padding: 10px; border-bottom: 1px solid #1B5A8C; 
                            cursor: pointer; ${!msg.read ? 'font-weight: bold;' : ''}">
                            ${msg.title}
                            <div style="display: none; margin-top: 5px; font-weight: normal;">
                                ${msg.content}
                                <small style="display: block; color: #666; margin-top: 5px;">
                                    ${new Date(msg.date).toLocaleString()}
                                </small>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            `;
            break;

        case 'instellingen':
            modalContent = `
                <h2 style="margin-top: 0; color: #1B5A8C;">Instellingen</h2>
                <div class="setting-item">
                    <label>Notificaties:</label>
                    <select id="notification-setting" style="margin-left: 10px; padding: 5px; border-radius: 5px; border: 1px solid #1B5A8C;">
                        <option value="true" ${settingsData.notifications ? 'selected' : ''}>Aan</option>
                        <option value="false" ${!settingsData.notifications ? 'selected' : ''}>Uit</option>
                    </select>
                </div>
                <div class="setting-item" style="margin-top: 15px;">
                    <label>Beveiligingsniveau:</label>
                    <select id="security-setting" style="margin-left: 10px; padding: 5px; border-radius: 5px; border: 1px solid #1B5A8C;">
                        <option value="low" ${settingsData.securityLevel === 'low' ? 'selected' : ''}>Laag</option>
                        <option value="medium" ${settingsData.securityLevel === 'medium' ? 'selected' : ''}>Gemiddeld</option>
                        <option value="high" ${settingsData.securityLevel === 'high' ? 'selected' : ''}>Hoog</option>
                    </select>
                </div>
                <div class="setting-item" style="margin-top: 15px;">
                    <label>Thema:</label>
                    <select id="theme-setting" style="margin-left: 10px; padding: 5px; border-radius: 5px; border: 1px solid #1B5A8C;">
                        <option value="light" ${settingsData.theme === 'light' ? 'selected' : ''}>Licht</option>
                        <option value="dark" ${settingsData.theme === 'dark' ? 'selected' : ''}>Donker</option>
                    </select>
                </div>
                <button id="save-settings" style="margin-top: 20px; background: #1B5A8C; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Opslaan</button>
            `;
            break;
    }

    modal.innerHTML = `
        ${modalContent}
        <button style="
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            color: #1B5A8C;
            font-size: 20px;
            cursor: pointer;
        ">&times;</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    
    switch(contentType) {
        case 'notificaties':
        case 'berichten':
            const listItems = modal.querySelectorAll('li');
            listItems.forEach(item => {
                item.addEventListener('click', () => {
                    const details = item.querySelector('div');
                    details.style.display = details.style.display === 'none' ? 'block' : 'none';
                    
                   
                    const index = item.dataset.index;
                    if (!messageData[index].read) {
                        messageData[index].read = true;
                        localStorage.setItem('messages', JSON.stringify(messageData));
                        item.style.fontWeight = 'normal';
                    }
                });
            });
            break;

        case 'instellingen':
            document.getElementById('save-settings').addEventListener('click', () => {
                const newSettings = {
                    notifications: document.getElementById('notification-setting').value === 'true',
                    securityLevel: document.getElementById('security-setting').value,
                    theme: document.getElementById('theme-setting').value
                };
                
                localStorage.setItem('userSettings', JSON.stringify(newSettings));
                alert('Instellingen succesvol opgeslagen!');
                document.body.removeChild(overlay);
                
                
                if (newSettings.theme === 'dark') {
                    document.body.style.backgroundColor = '#1a1a1a';
                    document.body.style.color = '#fff';
                } else {
                    document.body.style.backgroundColor = '';
                    document.body.style.color = '';
                }
            });
            break;
    }

    
    modal.querySelector('button').addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
}

document.getElementById('notificaties').addEventListener('click', () => createModal('notificaties'));
document.getElementById('berichten').addEventListener('click', () => createModal('berichten'));
document.getElementById('instellingen').addEventListener('click', () => createModal('instellingen'));


if (!localStorage.getItem('messages')) {
    const sampleMessages = [
        { 
            type: 'notification',
            title: 'Nieuwe transactie',
            content: 'U heeft €150,00 ontvangen van J. de Vries',
            date: new Date(),
            read: false
        },
        {
            type: 'message',
            title: 'Welkomstbericht',
            content: 'Welkom bij Movobank! Neem een kijkje rond.',
            date: new Date(),
            read: false
        }
    ];
    localStorage.setItem('messages', JSON.stringify(sampleMessages));
}


function updateSaldo() {
    const saldoElement = document.getElementById('bedrag');
    const storedSaldo = parseFloat(localStorage.getItem('saldo')) || 184.96; 
    saldoElement.textContent = `€${storedSaldo.toFixed(2)}`;
}


function transactiesaldoUpdate(amount) {
    let currentSaldo = parseFloat(localStorage.getItem('saldo')) || 184.96;
    currentSaldo += amount;
    localStorage.setItem('saldo', currentSaldo);
    updateSaldo();
}


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


