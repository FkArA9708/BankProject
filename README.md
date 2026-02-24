# MovoBank

**MovoBank** is een fictieve bankapplicatie, ontwikkeld als MBO niveau 2 project. Het doel was om een complete, visueel aantrekkelijke en functionele bankomgeving te bouwen met HTML, CSS en JavaScript. Het project toont niet alleen technische vaardigheden, maar ook oog voor design en projectmanagement. Deze project was tijdens de eerste leerjaar van de opleiding gemaakt, en zelfstandig ontwikkeld, met ondersteuning van AI voor complexere JavaScript‑functies.

---

## Inhoudsopgave

- Overzicht
- Schermopname van de website
- Functionaliteiten
- Technologieën
- Design & huisstijl
- Installatie & gebruik
- Projectstructuur
- Uitdagingen & oplossingen
- Persoonlijke bijdrage
- Toekomstige verbeteringen
- Met dank aan

---

## Overzicht

MovoBank is een volledig werkende website waarmee gebruikers hun bankzaken kunnen beheren: inloggen, saldo bekijken, rekeningen toevoegen, geld overschrijven, beleggen in aandelen en crypto, en transacties filteren. De website is volledig zelfstandig ontworpen en gebouwd, met een focus op een moderne, gebruiksvriendelijke interface.

---
# Schermopname van de website

Ik heb een video gemaakt een jaar geleden waarin ik mijn code uitleg en een rondleiding geef door de website. Deze video is te vinden in de projectmap als `video movobank project furkan kara.mkv`. Hierin bespreek ik de belangrijkste functies, ontwerpkeuzes en technische aspecten van MovoBank.

---

## Functionaliteiten

- **Inlogsysteem**, Meerdere gebruikers met eigen inloggegevens.
- **Dashboard**, Persoonlijk overzicht met saldo, recente transacties, notificaties, berichten en instellingen.
- **Rekeningen beheren**, Nieuwe betaal‑ of spaarrekeningen aanmaken.
- **Overschrijvingen**, Geld overboeken tussen rekeningen.
- **Beleggingen**, Kopen/verkopen van aandelen (TechCorp, Tesla, etc.) en crypto (Bitcoin, Ethereum, etc.) met realtime prijsfluctuatie.
- **Cryptoportefeuille**, Aparte pagina voor crypto‑investeringen.
- **Transactiegeschiedenis**, Filteren op type en datum.
- **Dark mode (deels)**, Instellingen op dashboard passen thema aan.

---

## Technologieën

- **HTML5**, Opbouw van alle pagina’s.
- **CSS3**, styling, flexbox, keyframes en media queries.
- **JavaScript (ES6)**, Interactie, DOM‑manipulatie, localStorage, simulatie van prijswijzigingen.
- **Figma**, Wireframes en visueel ontwerp.
- **Trello**, Scrumboard voor planning en voortgang.
- **Git / GitHub**, Versiebeheer en repository.

---

## Design & huisstijl

Het ontwerp is gestart met pen‑en‑papier schetsen, daarna uitgewerkt in **Figma**. De belangrijkste keuzes:

- **Logo**, Zelf gekozen van internet, past bij moderne bank.
- **Kleurenpalet**, Lichtblauw (`#E8F2FB`), donkerblauw (`#1B5A8C`), wit en zwart. Deze kleuren stralen rust, betrouwbaarheid en professionaliteit uit.
- **Typografie**, Twee fonts: `molde` (voor headings) en `Arial`/`Helvetica` (voor leestekst). Beide zijn goed leesbaar.
- **Iconen**, Gratis pictogrammen (notificaties, gebruikers, etc.) voor een herkenbare interface.

---

## Installatie & gebruik

1. **Clone de repository**
   
   ```bash
   git clone https://github.com/FurkanKara/BankProject.git
   ```
Open het project
Navigeer naar de map en open index.html in een moderne browser (Chrome, Firefox, Edge).

Inloggen
Gebruik een van de volgende accounts:

Gebruikersnaam: furkankara – Wachtwoord: furkan74

Gebruikersnaam: janpiet – Wachtwoord: janpiet

Gebruikersnaam: admin – Wachtwoord: admin123

(Andere accounts staan in de users arrays in de JavaScript bestanden.)

# Projectstructuur

movobank/

Fonts/                      # Custom fonts (molde, sofia sans)

images/                      # Alle afbeeldingen (icons, unsplash‑foto's)

Logo/                        # MovoBank logo

Ontwerp/                     # Eerste schetsen in MS Paint

week5 t/m week9/             # Bestanden per ontwikkelweek (geschiedenis)

index.html                   # Startpagina

app.js                       # Cookie banner

Bank project Trello link.docx

Bank project wireframe furkan kara.fig

Bank project wireframe furkan kara.pdf

beleggingen.html             # Beleggingen (aandelen + crypto)

beleggingen.js               # Aandelen kopen/verkopen

berekeningen.html            # Rekeningenoverzicht

berekeningen.js              # Rekeningen aanmaken

cryptovaluta.html            # Cryptovaluta specifiek

cryptovaluta.js              # Crypto kopen/verkopen

dashboard.html               # Persoonlijk dashboard

dashboard.js                 # Dashboard functionaliteit (modals, saldo)

index.html                   # Homepagina

inloggen.html                # Inlogpagina

inloggen.js                  # Loginvalidatie

omschrijvingen.html          # Overschrijvingsformulier

omschrijvingen.js            # Overschrijvingen logica

Presentatie voorbereiding Movobank Furkan Kara.docx

Sprint review Furkan Kara Bank Project 7-12-2024

style.css                    # Alle styling

transactiegeschiedenis.html  # Filterbare transacties

transactiegeschiedenis.js    # Filteren transacties

video movobank project furkan kara.mkv   # Uitleg van mijn code en schermopname van de website


# Uitdagingen & oplossingen
Tijdens het ontwikkelen ben ik een aantal obstakels tegengekomen:

**Real‑time prijswijzigingen bij beleggingen**

Oplossing: setInterval gebruikt om elke 3 seconden een kleine fluctuatie aan de bezittingen toe te voegen. Hierdoor lijkt het alsof de markt beweegt.

**Resultaten tonen na een transactie**

Oplossing: Met innerHTML en dynamische styling worden succes‑ of foutmeldingen inclusief een icoon weergegeven.

**Filteren van transactiegeschiedenis**

Oplossing: Een array van transacties filteren op geselecteerd type en datum, en de resultaten opnieuw in de DOM plaatsen.

**Dark mode (beperkt)**

Oplossing: Via instellingen in het dashboard wordt het thema aangepast. Vanwege tijdsgebrek is dit nog niet overal doorgevoerd.



# Persoonlijke bijdrage

**HTML & CSS**, Volledig zelf geschreven, inclusief de layout en styling.

**Ontwerp**, Van eerste schets tot definitief Figma ontwerp.

**Projectmanagement**,Trello bord bijgehouden, sprints gepland en opgeleverd.

**JavaScript** – Basisstructuur en eenvoudige functies zelf geschreven. De complexere delen (zoals de prijssimulatie, modals en filters) zijn met ondersteuning van AI gemaakt, maar ik begrijp de werking en kan deze uitleggen.

**Grafische achtergrond** – Mijn ervaring als allround mediamaker (MBO niveau 3) heeft geholpen bij het kiezen van kleuren, typografie en het creëren van een aantrekkelijke gebruikerservaring.


# Toekomstige verbeteringen

- Dark mode implementeren op alle pagina’s.

- Echte API‑koppeling voor actuele crypto‑ en aandelenkoersen.

- Gebruikers kunnen eigen profielfoto uploaden.

- Meertaligheid (NL/EN).

- Backend + database om gegevens permanent op te slaan (nu wordt alles in localStorage bewaard).


# Met dank aan
Fonts – Molde (demo) en Sofia Sans Semi Condensed.

Afbeeldingen – Unsplash (foto's) en gratis icoontjes van Flaticon.

Tools – Visual Studio Code, Figma, Trello, GitHub.

Docenten en klasgenoten voor feedback tijdens sprint reviews.

Bedankt voor het bekijken van MovoBank!
Vragen of suggesties? Neem gerust contact op.

Furkan Kara
furkan74@hotmail.nl
GitHub: https://github.com/FkArA9708