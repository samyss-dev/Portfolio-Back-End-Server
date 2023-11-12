import cors from "cors";
import express, { json } from "express";
import { ProjectsController } from "./controllers/ProjectsController";
import { ContactsController } from "./controllers/ContactsController";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(json());

app.get("/projects", async (request, response) => {
  response.status(200).send(await ProjectsController.instance.findAll());
});

app.post("/contacts", async (request, response) => {
  response
    .status(201)
    .send(await ContactsController.instance.create(request.body));
});

app.listen(process.env.PORT || 3000);
