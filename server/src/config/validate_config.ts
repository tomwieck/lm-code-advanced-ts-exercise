import { Config } from "./config";

export function validateConfig(config: Config): boolean {
	return (
		config.privateKey !== undefined &&
		config.privateKey !== "" &&
		config.port > 0
	);
}
