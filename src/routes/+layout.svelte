<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<style>
		body {
			display: flex;
			flex-direction: column;
			background-color; var

			font-family: var(--f-family);
			font-weight: var(--fw-regular);
			background-color: var(--bg-primary);
		}

		h1 {
			align-self: center;
		}

		.p-card {
			background-color: var(--bg-secondary);
			margin: 0 1.25em;
		}

		.options-container {
			border: 2px solid red;
		}

		fieldset {
			background-color: var(--bg-secondary);
		}
	</style>
</svelte:head>

{@render children?.()}
