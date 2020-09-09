const db = require("../../database/connection");

class NoteController {
  async store(req, res) {
    const { title, note } = req.body;

    const trx = await db.transaction();

    try {
      await trx("notes").insert({ title, note });

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      await trx.rollback();

      return res.status(400).json({
        error: "Unexpected error while creating new class",
      });
    }
  }

  async index(req, res) {
    const notes = await db("notes");

    return res.json(notes);
  }

  async show(req, res) {
    const { id } = req.params;

    const note = await db("notes").where({ id }).first();

    if (!note) {
      return res.json({ error: "Note not found" });
    }

    return res.json(note);
  }

  async update(req, res) {
    const { id } = req.params;

    const { title, note } = req.body;

    const trx = await db.transaction();

    try {
      await trx("notes").update({ title, note }).where({ id });

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      await trx.rollback();

      return res.status(400).json({
        error: "Unexpected error while creating new class",
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    await db("notes").where({ id }).del();

    return res.status(200).send();
  }
}

module.exports = new NoteController();
