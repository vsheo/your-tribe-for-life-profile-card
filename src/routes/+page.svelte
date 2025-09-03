<script>
    let {data} = $props();

    const members = data.members;
</script>

<h1>Visitekaartje</h1>
<span>Hello World!</span>

{#each members as member }
    <a href="/{member.id}">{member.name} - {member.id}</a><br>  
{/each}