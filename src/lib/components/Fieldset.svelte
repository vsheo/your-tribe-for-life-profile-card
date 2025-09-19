<script>
    let {change} = $props()
    // console.log(change)
    // console.log(change.fields)
    let fields = change.fields

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

                    // update the oldTheme
					oldTheme = newValue

				} else if (newValue.includes('font')) {
					body.classList.remove(oldFont)
					body.classList.add(newValue)

                    // update the oldFont
					oldFont = newValue
				}
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
        {#each fields as field, i }
            <input type="radio" id={field.id} name="{change.type}" checked={i === 0}>
            <label for={field.id}>{field.id}</label>
        {/each}
    </fieldset>
</form>

<style>
form {
    place-self: center;
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
    height: clamp(9em, 20vw, 10em);
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

        &:checked + label {
            color: var(--text-secondary);
        }
    }

    label {
        cursor: pointer;
        font-size: var(--fs-option);
        font-family: var(--f-family);

        &:first-of-type {
            margin-top: 0.5em;
        }

        &:last-of-type {
            margin-bottom: 0.7em;
        }

        &:hover{
            fill: var(--text-secondary);
            color: var(--text-secondary);
        }
    }
}
</style>