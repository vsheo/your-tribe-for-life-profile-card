<script>
    import { Githublogo } from '$lib'
    import { Ilwlogo } from '$lib'
    import IlwLogo from '$lib/assets/ilw-logo.svelte';

    // console.log(Githublogo)
    let {data} = $props();
    const person = data.person;

    import { onMount } from 'svelte';
	onMount(() => {
		const body = document.querySelector('body')
		const hiddenSection = document.querySelector('.options-container')
		const bounceField = document.querySelectorAll('fieldset')

		let oldTheme = 'palette-1'
		let oldFont = 'font-1'

		document.querySelectorAll('input').forEach(radio => {
			radio.addEventListener('change', (e) => {
				const newValue = e.target.id
				// remove old theme or font
				if (newValue.includes('palette')){
					// change theme
					body.classList.remove(oldTheme)
					body.classList.add(newValue)

					// theme transition animation
					body.classList.add('animation-theme-transition')
					// remove class after animation
					setTimeout(() => document.body.classList.remove('animation-theme-transition'), 500)

					// remove old active
					document.querySelector(`label[for=${oldTheme}]`).classList.remove('active')
					oldTheme = newValue

				} else if (newValue.includes('font')) {
					body.classList.remove(oldFont)
					body.classList.add(newValue)

					// remove old active
					document.querySelector(`label[for=${oldFont}]`).classList.remove('active')
					oldFont = newValue
				}
				// add active state
				document.querySelector(`label[for="${e.target.id}"]`).classList.add('active')
			})
		})

		bounceField.forEach(field => {
			field.addEventListener('change', () => {
				// remove animation class for both fields
				bounceField.forEach(ani => ani.classList.remove('animation-gelatine-bounce'))

				// after 10s bounce animation
				bounceField.forEach(ani => setTimeout(() => ani.classList.add('animation-gelatine-bounce'), 10000))
			})
		})

		hiddenSection.style.removeProperty('display');
	})
</script>

<article class="p-card">
    <h2>{person.name}</h2>

    <picture>
        <source type="image/avif" srcset="https://fdnd.directus.app/assets/{person.mugshot}?width=500&height=500&format=avif">
        <source type="image/webp" srcset="https://fdnd.directus.app/assets/{person.mugshot}?width=500&height=500&format=webp">
        <img class="avatar" src="https://fdnd.directus.app/assets/{person.mugshot}?width=125&height=125" alt="profile picture van Viresh Sheoratan" width="125" height="125">
    </picture>

    <p>{person.bio}</p>
    <a href="https://github.com/{person.github_handle}">
        <Githublogo />
        <span>Github</span>
    </a>
    <a href="{person.website}">
        <IlwLogo />
        <span>I Love Web</span>
    </a>
</article>

<section class="options-container" style="display: none">
    <h3>Change The Page!</h3>

    <form>
        <fieldset class="change-theme animation-gelatine-bounce">
            <legend>Change Theme</legend>
            <input type="radio" id="palette-1" name="palette" checked>
            <label for="palette-1" class="active">Theme 1</label>

            <input type="radio" id="palette-2" name="palette">
            <label for="palette-2">Theme 2</label>

            <input type="radio" id="palette-3" name="palette">
            <label for="palette-3">Theme 3</label>
        </fieldset>
    </form>

    <form>
        <fieldset class="change-font animation-gelatine-bounce">
            <legend>Change Font</legend>
            <input type="radio" id="font-1" name="font" checked>
            <label for="font-1" class="active">Font 1</label>

            <input type="radio" id="font-2" name="font">
            <label for="font-2">Font 2</label>

            <input type="radio" id="font-3" name="font">
            <label for="font-3">Font 3</label>
        </fieldset>
    </form>
</section>


<style>
.p-card {
    display: grid;
    grid-template-columns: min-content 1fr 1fr;
    grid-template-rows: min-content 1fr min-content;
    align-self: center;
    background-color: var(--bg-secondary);
    margin: 5em 1.25em 2em 1.25em;
    border-radius: 15px;
    max-width: 25em;

    h2 {
        grid-column: 2/4;
        grid-row: 1;
        align-self: center;
        margin-right: 0.4em;
        line-height: 1.5rem;
    }

    picture {
        grid-column: 1;
        grid-row: 1;
    }

    .avatar {
        border-radius: 50%;
        width: 5em;
        height: 5em;
        margin: 1em 0.5em 0.5em 1em;
    }

    p {
        grid-column: 1/4;
        grid-row: 2;
        width: inherit;
        max-width: 50ch;
        margin: 0 0.6em;
        padding: 0 1em;
        font-family: var(--f-family);
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        text-wrap: nowrap;
        margin: 1em 1em;

        &:first-of-type {
            grid-column: 1;
            grid-row: 3;
        }

        &:last-of-type {
            grid-column: 3;
            grid-row: 3;
        }

        :global(svg) {
            fill: var(--text-primary);
        }

        span {
            color: var(--text-primary);
            font-family: var(--f-family);
        }

        :global(&:hover svg, &:hover span) {
            fill: var(--text-secondary);
            color: var(--text-secondary);
        }

        &:focus-visible {
            outline: 3px dashed var(--text-secondary);
        }
    }
}

.options-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: min-content min-content;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
    }

    h3 {
        text-align: center;
        grid-column: 1/-1;
    }

    form {
        place-self: center;
    }
}

fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    justify-self: center;
    background-color: var(--bg-secondary);
    border: 2px solid;
    margin: 1em 1.25em;
    border-radius: 15px;
    height: clamp(8em, 20vw, 10em);
    width: clamp(12em, 50vw, 15em);

    &:focus-within {
        border: 3px dashed var(--text-secondary);
    }

    legend {
        text-align: center;
    }

    input {
        position: absolute;
        /* https://216digital.com/making-hidden-content-accessible-to-assistive-technologies/#:~:text=The%20Clip%20Pattern%3A%20A%20Better%20Approach */
        clip: rect(0, 0, 0, 0);
    }

    label {
        cursor: pointer;
        font-size: var(--fs-option);
        font-family: var(--f-family);

        &:first-of-type {
            margin-top: 0.5em;
        }

        &:last-of-type {
            margin-bottom: 0.5em;
        }

        &:hover{
            fill: var(--text-secondary);
            color: var(--text-secondary);
        }
    }

    .active {
        color: var(--text-secondary);
    }
}
</style>