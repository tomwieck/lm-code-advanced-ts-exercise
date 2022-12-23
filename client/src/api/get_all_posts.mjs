import { baseUrl } from "./base_url.mjs";

export async function getAllPosts() {
	try {
		const result = await fetch(baseUrl + "/api/users/all");
		const posts = await result.json();
		return posts;
	} catch {
		return [];
	}
}
