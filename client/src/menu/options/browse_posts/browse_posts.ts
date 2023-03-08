import { fetchPost } from "../../../api/fetch_post.ts/index.js";
import { clear, print, prompt, printNewLine } from "../../../ui/console.js";

export async function browsePosts() {
	clear("nope");

	const desiredPostId = await prompt("Enter Post ID");

	// TODO: should we validate this?!

	print(`📨 Fetching post "${desiredPostId}...`);

	const result = await fetchPost(desiredPostId);

	print(`🥳 Received post:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
}
