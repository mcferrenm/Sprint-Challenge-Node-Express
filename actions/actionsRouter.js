const express = require("express");

const Actions = require("./actionModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error while retrieving actions." });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const action = await Actions.get(id);
    res.status(200).json(action);
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error while retrieving an action." });
  }
});

router.post("/", async (req, res) => {
  const action = req.body;
  if (!action.project_id || !action.description || !action.notes) {
    res.status(400).json({
      error: "An action must have a project_id, description, and notes."
    });
  }
  try {
    const newAction = await Actions.insert(action);
    res.status(201).json(newAction);
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error while creating an action." });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  Actions.remove(id)
    .then(count => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Action not found" });
      }
    })
    .catch(err => {
      res.json({ error: "There was an error while deleting an action." });
    });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Actions.update(id, changes)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.json({ error: "There was an error while deleting an action." });
    });
});

module.exports = router;
