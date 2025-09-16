<script>
	import favicon from '$lib/assets/favicon.svg';
    import '$lib/assets/style.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
    <h1>FDND Visitekaartje</h1>
</header>

<main>
	{@render children?.()}
</main>


<style>
	@keyframes animation-mask-grow {
		from {
			mask-position: 0 0;
		}
		to {
			mask-position: 100% 0;
		}
	}

	@keyframes animation-mask-shrink {
		from {
			mask-position: 100% 0;
		}
		to {
			mask-position: 0 0;
		}
	}

	@keyframes gelatine {
		from, to {
			transform: scale(1, 1);
		}
		25% { transform: scale(0.9, 1.1);
		}
		50% { transform: scale(1.1, 0.9);
		}
		75% { transform: scale(0.95, 1.05);
		}
	}

	/* change color animation */
	:global(.animation-theme-transition)  {
		animation: animation-mask-grow 0.5s steps(22) forwards;
	}

	/* fieldset bounce animation */
	:global(.animation-gelatine-bounce) {
		animation: gelatine 1s 3;
		animation-delay: 10s;
	}

	:global(body) {
		font-family: var(--f-family);
		font-weight: var(--fw-regular);
		line-height: var(--lh-primary);
		background-color: var(--bg-primary);

		/* background transition */
		transition: background-color 0.5s ease;
		mask-image: url("/images/mask-img.png");
		mask-size: 2300% 100%;
		mask-repeat: no-repeat;
		animation: animation-mask-shrink 0.5s steps(22) forwards;
	}

	header h1 {
		margin: 1em 1em 0.5em 1em;
		text-align: center;
		line-height: 2rem;
	}

	main {
		display: flex;
		flex-direction: column;
	}
</style>