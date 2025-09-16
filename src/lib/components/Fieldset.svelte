<script>
    let {themes} = $props()
    // const Ids = field.id
    // console.log(themes[0])


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

<form>
    <fieldset class="change-theme animation-gelatine-bounce">
        <legend>Change Theme</legend>
        {#each themes as theme, i }
            <input type="radio" id={theme.id} name="palette" checked>
            <label for={theme.id} class="active">theme {i + 1}</label>
        {/each}
    </fieldset>
</form>

<!-- <form>
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
</form> -->

<style>
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