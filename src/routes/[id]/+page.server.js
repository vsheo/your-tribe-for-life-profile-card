export async function load({url, params}) {
    const membersResponse = await fetch(`https://fdnd.directus.app/items/person/`+params.id)
	const membersData = await membersResponse.json()

	console.log(membersData)

	return {member: membersData.data}
}