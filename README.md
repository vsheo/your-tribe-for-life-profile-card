# Visitekaartje inSvelte
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [svelte structuur](#svelte-structuur)
  * [Functionaliteiten](#Functionaliteiten)
  * [Code conventies](#Code-conventies)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
De opdracht was om in SvelteKit een visitekaartje te maken, waarbij de code opgesplitst is in +layout.svelte, +page.svelte en componenten. Dit is gelukt en het eindresultaat ziet er zo uit:
<img width="2469" height="1524" alt="image" src="https://github.com/user-attachments/assets/50a89549-65ed-48bb-8f47-bff90d6d5f35" />

link naar de [live site](https://glittery-stroopwafel-dfbeb8.netlify.app/)
QR code naar de live site:

<img width="250" height="250" alt="image" src="https://github.com/user-attachments/assets/ac6f9f56-89f5-46bf-ac6c-d5af8c99c2a9" />


## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
Op de website kan de gebruiker mijn bio lezen en zijn er links naar mijn GitHub page en de I Love Web website. Als interactie, om te laten zien wat ik kan maken, heb ik drie opties toegevoegd om de kleur van de website te veranderen en drie opties om de font aan te passen. Bij het veranderen van het lettertype speelt een transition animatie af. En wanneer de gebruiker na 10 seconden niet op een van de opties klikt, krijgt de container een bounce animatie om de aandacht van de gebruiker te trekken.

### Font veranderen:
[font-veranderen.webm](https://github.com/user-attachments/assets/17f15980-ee56-4710-a7da-b88603f150c4)

### Kleur veranderen:
[Color-Transition.webm](https://github.com/user-attachments/assets/2a55b61b-0f85-4018-a98b-863f80aba34f)

### bounce animatie:
[Form-Bounce.webm](https://github.com/user-attachments/assets/b4ee077c-7937-4e76-b904-cb42525ff79c)



## svelte structuur
### HTML
De HTML is opgesplitst in +layout.svelte, +page.svelte en een component.
- In +layout.svelte staat alleen de HTML voor de header en de main.
- In +page.svelte staat de main content van de website.
- In lib/components/Fieldset.svelte staat de HTML voor het veranderen van kleuren en fonts (een form/fieldset). Dit component wordt in Svelte met een loop gebruikt om twee fieldsets te genereren.

### CSS
De CSS staat in de bijbehorende bestanden:
- de styling voor de header en main in +layout.svelte
- de styling voor de elementen binnen de main in +page.svelte
- en de styling voor het fieldset component in Fieldset.svelte.

### JavaScript
JavaScript heb ik alleen gebruikt voor het veranderen van kleuren en fonts, en dit staat in het component zelf geschreven. Wanneer JavaScript uitstaat, worden de fieldsets niet weergegeven.


## Functionaliteiten
### Responsiveness
De website is responsive voor apparaten met een schermbreedte vanaf 320px.
- De profiel kaart heeft een max width. Op kleinere schermen wordt ze kleiner weergegeven, terwijl ze op een laptop wat breder is
- De 'change the page' sectie is opgebouwd met een grid dat gebruik maakt van auto columns. Hierdoor wordt er vanzelf een tweede kolom aangemaakt zodra er ruimte is. Daardoor is er geen media query nodig om deze sectie responsive te maken
https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/routes/%2Bpage.svelte#L121-L124
- De fieldsets hebben een clamp op de width en height, waardoor ze op grotere schermen automatisch iets breder en langer worden
https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/lib/components/Fieldset.svelte#L78-L79

Responsive video:
[Responsive.webm](https://github.com/user-attachments/assets/df560f51-de02-49e3-b1d2-bb9b10ebef65)


### Styleguide
De styleguide zit in [src/lib/assets/style.css](https://github.com/vsheo/your-tribe-for-life-profile-card/blob/main/src/lib/assets/style.css)

- In deze stylesheet is er een reset op marges en paddings

- Daarnaast zijn alle font-families, font-sizes, font-weight en line-heights als custom properties aangegeven
  - custom properties https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/lib/assets/style.css#L12-L22
  - font-face https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/lib/assets/style.css#L48-L70
  - Om deze fonts op de website te gebruiken, heb ik classes aangemaakt. Afhankelijk van welke class op de body staat, verandert het font van alle tekst op de website https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/lib/assets/style.css#L73-L89



- In deze style.css file zitten ook alle kleuren in classes. In deze classes hebben de custom properties dezelfde naam, maar allemaal met andere waarden. Deze classes worden aan de body toegevoegd om het kleuren palet van de pagina te veranderen https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/lib/assets/style.css#L26-L45
- Om alle kleuren op de website te kunnen aanpassen, heb ik ervoor gezorgd dat in de CSS de color en background-color altijd aangegeven worden met custom properties. Hierdoor veranderen de kleuren automatisch wanneer er een andere kleuren class (palet) aan de body wordt toegevoegd
  - classes op body https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/app.html#L10
  - voorbeeld custom property gebruik in CSS https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/routes/%2Bpage.svelte#L43-L51


Om deze style.css te gebruiken, wordt deze via JavaScript geimporteerd in `+layout.svelte` https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/routes/%2Blayout.svelte#L1-L6
Hierdoor kan de CSS die hierin staat op alle pagina's van de website worden gebruikt



### Component: Fieldset
de fieldset component staat in [src/lib/Fieldset.svelte](https://github.com/vsheo/your-tribe-for-life-profile-card/blob/main/src/lib/components/Fieldset.svelte)

de fieldset krijgt data van `+page.svelte` mee, dit is waar de component wordt aangeroepen
https://github.com/vsheo/your-tribe-for-life-profile-card/blob/83989d8174c5e73c9c2d7a99d5f119ec85f81955/src/routes/%2Bpage.svelte#L33-L39

de data die meegestuurd wordt zijn alle id's die de input velden en labels van de fieldset nodig heeft.
dit staat geschreven in een lokaal JSON bestant, die op `+page.svelte` opgehaald wordt met `import`
- JSON https://github.com/vsheo/your-tribe-for-life-profile-card/blob/83989d8174c5e73c9c2d7a99d5f119ec85f81955/src/lib/assets/ChangeOptions.json#L1-L20
- import https://github.com/vsheo/your-tribe-for-life-profile-card/blob/83989d8174c5e73c9c2d7a99d5f119ec85f81955/src/routes/%2Bpage.svelte#L3-L6

in `+page.svelte` loop ik door de eerste array in de JSON data, zodat ik 2 fieldsets maak
https://github.com/vsheo/your-tribe-for-life-profile-card/blob/83989d8174c5e73c9c2d7a99d5f119ec85f81955/src/routes/%2Bpage.svelte#L36-L38

Nu kan ik `props` gebruiken om de data op te halen in de Fieldset component
https://github.com/vsheo/your-tribe-for-life-profile-card/blob/83989d8174c5e73c9c2d7a99d5f119ec85f81955/src/lib/components/Fieldset.svelte#L2-L5

en gebruiken om alle input velden en labels te genereren
https://github.com/vsheo/your-tribe-for-life-profile-card/blob/83989d8174c5e73c9c2d7a99d5f119ec85f81955/src/lib/components/Fieldset.svelte#L57-L65



### Data ophalen
De fetch voor het ophalen van data staat in +layout.server.js.

De opgehaalde data wordt gefilterd op mijn naam, GitHub handle, I Love Web link, bio en mugshot.
Deze data wordt vervolgens als de variabele `person` doorgestuurd naar de pagina's
https://github.com/vsheo/your-tribe-for-life-profile-card/blob/5047f39e140a90cb2ffcba22a674b36170889a86/src/routes/%2Blayout.server.js#L2-L7



## Code conventies
### naamgeving
- Namen zijn zo kort mogelijk, maar nog steeds beschrijvend waarvoor het bedoeld is
  - bijvoorbeeld: dit is voor de primary font size `--fs-primary`
- Voor CSS gebruik ik kebab case (een streep na elk woord)
- Voor JavaScript gebruik ik camelCase (elk nieuw woord met een hoofdletter)
- Voor componenten maak ik de eerste letter van het woord tot een hoofdletter

### HTML
- In HTML worden block elementen als blok geschreven
  - block elementen hebben een lege regel erboven en eronder
  - voorbeeld: https://github.com/vsheo/your-tribe-for-life-profile-card/blob/b3e1a4b4e5996045cecf43c64a00271e27ac5851/src/lib/components/Fieldset.svelte#L57-L65
- inline elementen blijven op 1 regel
  - voorbeeld: https://github.com/vsheo/your-tribe-for-life-profile-card/blob/b3e1a4b4e5996045cecf43c64a00271e27ac5851/src/routes/%2Bpage.svelte#L29

### CSS
- CSS selectors hebben dezelfde volgorde als de HTML structuur
- als het HTML element een block element is, dan zijn alle child elementen in CSS genest
  - voorbeeld: https://github.com/vsheo/your-tribe-for-life-profile-card/blob/b3e1a4b4e5996045cecf43c64a00271e27ac5851/src/routes/%2Bpage.svelte#L43-L119
- als een element een speudo class heeft, dan wordt deze bij het element genest
  - voorbeeld: https://github.com/vsheo/your-tribe-for-life-profile-card/blob/b3e1a4b4e5996045cecf43c64a00271e27ac5851/src/lib/components/Fieldset.svelte#L99-L116
- nesten in CSS gaat niet verder dan 3 niveaus diep



## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Als je deze repo wilt gebruiken kan je hem eerst clonen door op de github pagina op de groene `code` button te klikken:
<img width="350" height="300" alt="image" src="https://github.com/user-attachments/assets/186c451f-cae6-4389-9e72-5d396c00f5d4" />

Hier kan je zelf kiezen welke optie je fijner vindt.

Daarna kan je het project openen in een code editor.
Hier moet je dan eerst ```npm install``` uitvoeren in de terminal.

als dat af is kan je het project op localhost opstarten met:
```npm run dev```


## Bronnen
- [CSS mask animatie](https://codepen.io/pizza3/pen/qmerBv?editors=1100)


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
