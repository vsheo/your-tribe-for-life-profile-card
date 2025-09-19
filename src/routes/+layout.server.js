export async function load({url}) {
	const personResponse = await fetch(`https://fdnd.directus.app/items/person/167?fields=name,github_handle,website,bio,mugshot`)
	const personData = await personResponse.json()
	// console.log(personData)

	return {person: personData.data}
}