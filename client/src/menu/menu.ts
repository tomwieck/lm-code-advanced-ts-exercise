import { states } from "../states/states.js";
import { clear, print, printNewLine, prompt } from "../ui/console.js";

export async function showMenu() {
	clear();
	print("0. Send Server Message", false);
	print("1. Show all posts", false);
	print("2. Show all users", false);
	print("3. Browse posts", false);
	print("4. Add user", false);
	printNewLine();

	const result = await prompt("What shall we do? ");

	if (result === "0") return states.SEND_MESSAGE;
	if (result === "1") return states.SHOW_POSTS;
	if (result === "2") return states.SHOW_USERS;
	if (result === "3") return states.BROWSE_POSTS;
	if (result === "4") return states.ADD_USER;

	return states.UNKNOWN;
}
