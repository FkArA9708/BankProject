
const username = localStorage.getItem('furkankara', 'janpiet', 'admin');


if (username) {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Welkom, ${username}.`;

    const usernameElement = document.getElementById('gebruikersnaam');
    usernameElement.textContent = username;
} else {
    console.error('Geen gebruikersnaam gevonden in localStorage.');
}
