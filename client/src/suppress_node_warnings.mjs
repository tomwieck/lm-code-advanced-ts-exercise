// https://stackoverflow.com/a/73525885

// node 18 displays an annoying console warning whenever we use `fetch`
// this hijacks the warning printing and ignores this one

// ❌ Don't bother messing with TS in this file - you can just rename it to .ts and continue
export function suppressNodeWarnings() {
	const originalEmit = process.emit;

	// @ts-ignore
	process.emit = function (name, data, ...args) {
		if (
			name === `warning` &&
			typeof data === `object` &&
			data.name === `ExperimentalWarning`
			//if you want to only stop certain messages, test for the message here:
			//&& data.message.includes(`Fetch API`)
		) {
			return false;
		}
		return originalEmit.apply(process, arguments);
	};
}
