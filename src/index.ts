import cors from "cors";
import express, { json } from "express";
import { ProjectsController } from "./controllers/ProjectsController";
import { ContactsController } from "./controllers/ContactsController";

const app = express();
const allowedOrigins = process.env.CORS_ORIGIN?.split(",");

if (!allowedOrigins) {
	throw new Error("CORS Exception - Enviroment Variable for Front-end origin was not provided!");
}

app.use(cors({ origin: allowedOrigins }));
app.use(json());

app.get("/projects", async (request, response) => {
	response.status(200).send(await ProjectsController.instance.findAll());
});

app.post("/contacts", async (request, response) => {
	response.status(201).send(await ContactsController.instance.create(request.body));
});

app.listen(process.env.PORT || 3000);
