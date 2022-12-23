import * as express from "express";

import { Server } from "http";
import { initialiseRoutes } from "./setup_routes";
import { printNewLine } from "./helpers/helpers";
import { checkConfig } from "./config/check_config";
import { getConfig } from "./config/config";

try {
	printNewLine();

	const config = getConfig();

	if (!checkConfig(config)) {
		console.log("❌ Config not setup!");
		process.exit(1); // exit with a non-zero error code
	}

	console.log("✅ Valid configuration found.");

	printNewLine();

	console.log("💫 Initialising Server...");
	const app = express();

	console.log("👉 Enabling JSON middleware...");
	app.use(express.json());

	console.log("👉 Enabling URL-Encoded middleware...");
	app.use(express.urlencoded({ extended: true }));

	initialiseRoutes(app);

	const server = app
		.listen(config.port, () => {
			console.log(`⭐ Server is now listening on port: ⚓ ${config.port} ⭐`);
			printNewLine();
			console.log(`⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐`);
			console.log(
				`⭐    Health check at "http://localhost:${config.port}/"      ⭐`
			);
			console.log(
				`⭐    Or try "http://localhost:${config.port}/api/posts/all"  ⭐`
			);
			console.log(`⭐    🗺️  Explore to find other routes too!          ⭐`);
			console.log(`⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐`);
		})
		.on("error", (error) => {
			console.error("🚨 Express Error Handler 🚨 ");
			console.error(error);
		});

	process.on("SIGINT", () => handleShutdown(server));
	process.on("SIGTERM", () => handleShutdown(server));
	process.on("SIGHUP", () => handleShutdown(server));
} catch (e: unknown) {
	console.error("🚨 Top level Error caught 🚨 ");
	console.error((e as Error).message);
}

function handleShutdown(server: Server) {
	console.log("🚪 Closing Server...");
	server.close(() => {
		console.log("🏥 Express server closed ✅");
		process.exit(0);
	});
}
