import { sendMessageToServer } from "../../../api/send_message_to_server.ts/index.js";
import { states } from "../../../states/states.js";
import { clear, print, printNewLine, prompt } from "../../../ui/console.js";

export async function sendMessage() {
	clear();

	const message = await prompt("What message shall we send? ");

	printNewLine();
	print(`📨 Sending message "${message}"...`);

	const success = await sendMessageToServer(message);

	if (success === true) print("🥳 Message received successfully!");
	else print("😵 Message NOT received.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
