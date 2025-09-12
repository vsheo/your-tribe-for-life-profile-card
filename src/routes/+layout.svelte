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
			text-align: center;
			margin: 0 1em;
		}

		.p-card {
			display: grid;
			grid-template-columns: min-content 1fr 1fr;
			grid-template-rows: min-content 1fr min-content;
			background-color: var(--bg-secondary);
			margin: 2em 1.25em;
			border-radius: 15px;
			max-width: 405px;

			h2 {
				grid-column: 2/4;
				grid-row: 1;
				align-self: center;
				margin-right: 0.4em;
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

				span {
					color: var(--text-primary)
				}
			}
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
