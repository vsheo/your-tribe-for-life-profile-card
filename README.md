# Visitekaartje inSvelte
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Code conventies](#Code-conventies)
  * [Installatie](#installatie)
  * [Uitleg van code](#Uitleg-van-code)
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

## video transition
## video bounce

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

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


## Code conventies
### naamgeving
- Namen zijn zo kort mogelijk, maar nog steeds beschrijvend waarvoor het bedoeld is
  - bijvoorbeeld: dit is voor de primary font size `--fs-primary`
- Voor CSS gebruik ik kebak case (een streep na elk woord)
- Voor JavaScript gebruik ik camelCase (elk nieuw woord met een hoofdletter)
- Voor componenten gebruik ik eerste letter van het woord een hoofdletter

### HTML
- In HTML worden block elementen als blok geschreven
  - block elementen hebben een lege regel erboven en eronder
  - voorbeeld: https://github.com/vsheo/your-tribe-for-life-profile-card/blob/b3e1a4b4e5996045cecf43c64a00271e27ac5851/src/lib/components/Fieldset.svelte#L57-L65
- inline elementen blijven op 1 regel
  - voorbeeld: https://github.com/vsheo/your-tribe-for-life-profile-card/blob/b3e1a4b4e5996045cecf43c64a00271e27ac5851/src/routes/%2Bpage.svelte#L29

### CSS
- CSS selectors hebben dezelfde volgorde als de HTML structuur
- als het HTML element een block element is, dan zijn alle children in CSS genest
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


## Uitleg van code in wiki
- Responsiveness
- Styleguide
- Component: Fieldset
  - Change color & fonts
  - Color transition animation
- Data ophalen


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
