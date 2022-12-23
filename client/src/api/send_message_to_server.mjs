import { print, prompt } from "../ui/console.mjs";
import { baseUrl } from "./base_url.mjs";

export async function sendMessageToServer(message) {
	try {
		const result = await fetch(baseUrl + "/api/send/" + message);

		const json = await result.json();

		const { success } = json;

		return success;
	} catch {
		return false;
	}
}
