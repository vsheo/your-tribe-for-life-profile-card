<script>
    import IlwLogo from '$lib/assets/ilw-logo.svelte'
    import Fields from '$lib/assets/ChangeOptions.json'
    console.log(Fields.change.fonts)

    let themes = Fields.change.themes
    let fonts = Fields.change.fonts


    import { Githublogo } from '$lib'
    import { Ilwlogo } from '$lib'
    import { Fieldset } from '$lib'

    let {data} = $props()
    const person = data.person
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

    <!-- {#each Fields.change as field}
        <Fieldset {field}/>
    {/each} -->

    <Fieldset {themes}/>
    <!-- <Fieldset {fonts}/> -->
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
</style>