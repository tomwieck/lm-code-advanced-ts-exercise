import { getAllPosts } from "../api/get_all_posts.mjs";
import { clear, print, printNewLine, prompt } from "../ui/console.mjs";

export async function showAllPosts() {
	clear("yes");

	printNewLine();

	print("📨 Fetching posts...");

	const result = await getAllPosts();

	print(`🥳 Received ${result.length} posts. Here they are:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
}
