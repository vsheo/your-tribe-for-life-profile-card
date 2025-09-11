export async function load({url}) {
	const membersResponse = await fetch(`https://fdnd.directus.app/items/person?fields=*`)
	const membersData = await membersResponse.json()

	console.log(membersData)

	return {members: membersData.data}
}