const transacties = [
    { id: 1, type: 'inkomend', datum: '2024-01-11', bedrag: 150.00 },
    { id: 2, type: 'uitgaand', datum: '2024-06-18', bedrag: 100.00 },
    { id: 3, type: 'uitgaand', datum: '2024-09-04', bedrag: 15.00 },
    { id: 4, type: 'inkomend', datum: '2019-11-05', bedrag: 16.00 },
    { id: 5, type: 'inkomend', datum: '2021-02-19', bedrag: 50.00 },
    { id: 6, type: 'uitgaand', datum: '2015-01-31', bedrag: 100.00 },
    { id: 7, type: 'inkomend', datum: '2023-07-05', bedrag: 50.00 },
    { id: 8, type: 'uitgaand', datum: '2020-10-14', bedrag: 100.00 },
];


const typeFilter = document.getElementById('type');
const datumFilter = document.getElementById('datum');
const filterButton = document.getElementById('filter-button');
const resultatenSectie = document.getElementById('resultaten');


function toonTransacties(transacties) {
    resultatenSectie.innerHTML = `
        <table>
            <thead>
            </thead>
            <tbody>
                ${transacties.map(transactie => `
                    <tr>
                        <th>Type:</th><td>${transactie.type}</td>
                    </tr>
                    <tr>
                        <th>Datum:</th><td>${new Date(transactie.datum).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                        <th>Bedrag:</th><td>€${transactie.bedrag.toFixed(2)}</td>
                    </tr>
                    <tr><td colspan="2"><br></td></tr> <!-- Voeg een lijnbreuk toe na elke transactie -->
                `).join('')}
            </tbody>
        </table>
    `;
}





function filterTransacties() {
    const geselecteerdType = typeFilter.value;
    const geselecteerdeDatum = datumFilter.value;

    let gefilterdeTransacties = transacties;

    if (geselecteerdType !== 'all') {
        gefilterdeTransacties = gefilterdeTransacties.filter(
            t => t.type === geselecteerdType
        );
    }

    if (geselecteerdeDatum) {
        const [jaar, maand] = geselecteerdeDatum.split('-');
        gefilterdeTransacties = gefilterdeTransacties.filter(t => {
            const datum = new Date(t.datum);
            return datum.getFullYear() === parseInt(jaar) && (datum.getMonth() + 1) === parseInt(maand);
        });
    }

    toonTransacties(gefilterdeTransacties);
}


filterButton.addEventListener('click', filterTransacties);


toonTransacties(transacties);

