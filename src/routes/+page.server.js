// /** @type {import('./$types').PageServerLoad} */
// export const load = async (event) => {
// 	const context = event.platform?.context;
// 	console.log(context); // shows up in your functions log in the Netlify app
// };

export async function load({url}) {
	const membersResponse = await fetch(`https://fdnd.directus.app/items/person?fields=*`)
	const membersData = await membersResponse.json()

	console.log(membersData)

	return {members: membersData.data}
}
