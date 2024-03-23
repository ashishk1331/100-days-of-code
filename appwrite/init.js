import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

export async function addBetaUser(props) {
	const { email } = props;

	try{
		const response = await databases.createDocument(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
			process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
			ID.unique(),
			{
				email,
			},
		);

		if(response.$id) {
			return response.$id;
		} else {
			return null;
		}
	} catch(error) {
		console.error(error);
		return error;
	}

	return null;
}
