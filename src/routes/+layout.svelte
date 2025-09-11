<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<style>
	/* RESET */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		object-fit: cover;
	}

	/* ====================================================== GLOBAL ====================================================== */
	body {
		--fs-primary: 1rem;
		/* 64px */
		--fs-title: clamp(2.5rem, calc(3vw + 1rem), 4rem);
		/* 48px */
		--fs-section: clamp(2.5rem, calc(3vw + 1rem), 3rem);
		/* 32px */
		--fs-article: clamp(1.5rem, calc(1vw + 1rem), 2rem);

		font-optical-sizing: auto;
	}

	/* ====================================================== COLOR PALETTES ====================================================== */
	.palette-1 {
		--bg-primary: #B4E5CB;
		--bg-secondary: #00BF7D;
		--text-primary: #1E1E1E;
		--text-secondary: #0073E6;
	}

	.palette-2 {
		--bg-primary: #8496D2;
		--bg-secondary: #054FB9;
		--text-primary: #FFFFFF;
		--text-secondary: #DFAD8C;
	}

	.palette-3 {
		--bg-primary: #8F203D;
		--bg-secondary: #630E21;
		--text-primary: #FFFFFF;
		--text-secondary: #C4AA88;
	}

	/* ====================================================== TYPOGRAFIE FONTS ====================================================== */

	/* ====================================================== TYPOGRAFIE CLASSES ====================================================== */
	h1 {
		font-family: var(--f-family);
		font-weight: var(--fw-regular);
		font-size: var(--fs-title);
	}

	h2 {
		font-family: var(--f-family);
		font-weight: var(--fw-regular);
		font-size: var(--fs-section);
	}

	h3 {
		font-family: var(--f-family);
		font-weight: var(--font-weight-bold);
		font-size: var(--fs-article);
	}
	</style>
</svelte:head>

{@render children?.()}
