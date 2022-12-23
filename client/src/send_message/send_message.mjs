import { sendMessageToServer } from "../api/send_message_to_server.mjs";
import { states } from "../states/states.mjs";
import { clear, print, prompt } from "../ui/console.mjs";

export async function sendMessage() {
	clear();

	print("📨 Sending message...");
	const success = await sendMessageToServer("hello");
	if (success === true) print("🥳 Message received successfully!");
	else print("😵 Message NOT received.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
