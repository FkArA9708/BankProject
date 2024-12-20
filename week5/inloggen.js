const users = [
    { username: 'furkankara', password: 'furkan74' },
    { username: 'janpiet', password: 'janpiet'},
    { username: 'admin', password: 'admin123'},
    { username: 'tariq' ,password: 'tariqabbas'},
    { username: 'ahmad' ,password: 'ahmadsaleh'}
];

document.querySelector('.login-form').addEventListener('submit', (e) => {
    e.preventDefault(); 

    const username = document.getElementById('gebruikersnaam2').value;
    const password = document.getElementById('wachtwoord').value;
    const remember = document.getElementById('onthoudmijnwachtwoord').checked;

    
    if (!username || !password) {
        alert('Vul alstublieft alle velden in.');
        return;
    }

    
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
       localStorage.setItem('furkankara', username);
        alert(`Welkom, ${username}! Je wordt nu naar je dashboard geleid.`);
        window.location.href = 'dashboard.html';
        
        
    } else {
        alert('Onjuiste gebruikersnaam of wachtwoord.');
    }


});
