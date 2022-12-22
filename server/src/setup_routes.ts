import express, { Express, json } from "express";
import { getAllPosts } from "./routes/get_posts";
import { getAllUsers } from "./routes/get_users";

export function initialiseRoutes(app: Express) {
	console.log("🏗️  Setting up routers...");

	addBrowseableRoutes(app);

	addAPIRoutes(app);
}

function addBrowseableRoutes(app: Express) {
	console.log("🛠️  Creating browseable router...");
	// we'll use this router to return any routes that we'd like to return

	const browseableRouter = express.Router();

	browseableRouter.use((req, res, next) => {
		res.header("Access-Control-Allow-Methods", "GET");
		next();
	});

	console.log("🏠❤️‍🩹  Adding home health check route...");
	browseableRouter.get("/", (req, res) => {
		res.status(200).send("👍 Okay! The server is responding! 🙌");
	});

	console.log("🛠️  Applying browseable router to Express server...");
	app.use("/", browseableRouter);
}

function addAPIRoutes(app: Express) {
	console.log("🛠️  Creating API router...");

	// we'll use this router to return specifically JSON
	const apiRouter = express.Router();
	apiRouter.use((req, res, next) => {
		res.setHeader("Content-Type", "application/json");
		next();
	});

	console.log("✍️  Adding blog post routes...");
	apiRouter.get("/posts/all", (req, res) => {
		res.status(200).send(JSON.stringify(getAllPosts()));
	});

	apiRouter.get("/posts/:id", (req, res) => {
		res
			.status(200)
			.send(
				JSON.stringify(getAllPosts().filter((p) => p.id === req.params.id))
			);
	});

	console.log("✍️  Adding user routes...");
	apiRouter.get("/users/all", (req, res) => {
		res.status(200).send(JSON.stringify(getAllUsers()));
	});

	apiRouter.get("/users/:id", (req, res) => {
		res
			.status(200)
			.send(
				JSON.stringify(getAllUsers().filter((u) => u.id === req.params.id))
			);
	});

	console.log("🛠️  Applying API router to Express server...");
	app.use("/api", apiRouter);
}
