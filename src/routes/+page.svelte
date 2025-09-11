<script>
    let {data} = $props();

    const members = data.members;
</script>

<h1>FDND Visitekaartje</h1>

<article>
    <h2>Viresh Sheoratan</h2>
    <img src="" alt="profile picture van Viresh Sheoratan">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    <a href="/">Github</a>
    <a href="/">I Love Web</a>
</article>

<section>
    <h3>Change The website!</h3>

    <fieldset class="change-theme">
        <legend>Change Theme</legend>
        <input type="radio" id="palette-1" name="palette" checked>
        <label for="palette-1">Theme 1</label>

        <input type="radio" id="palette-2" name="palette">
        <label for="palette-2">theme 2</label>

        <input type="radio" id="palette-3" name="palette">
        <label for="palette-3">theme 3</label>
    </fieldset>

    <fieldset class="change-font">
        <legend>Change Font</legend>
        <input type="radio" id="font-1" name="font" checked>
        <label for="font-1">font 1</label>

        <input type="radio" id="font-2" name="font">
        <label for="font-2">font 2</label>

        <input type="radio" id="font-3" name="font">
        <label for="font-3">font 3</label>
    </fieldset>
</section>
