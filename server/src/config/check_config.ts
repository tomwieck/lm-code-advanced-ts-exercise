import { Config } from "./config";

export function checkConfig(config: Config): boolean {
	return (
		config.privateKey !== undefined &&
		config.privateKey !== "" &&
		config.port > 0
	);
}
