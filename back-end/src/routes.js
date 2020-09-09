const { Router } = require("express");

const NoteController = require("./app/controllers/NoteController");

const routes = new Router();

routes.post("/notes", NoteController.store);
routes.get("/notes", NoteController.index);
routes.get("/notes/:id", NoteController.show);
routes.put("/notes/:id", NoteController.update);
routes.delete("/notes/:id", NoteController.delete);

module.exports = routes;
