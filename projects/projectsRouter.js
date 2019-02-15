const express = require("express");

const Projects = require("./projectModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.get();
    if (projects) {
      res.status(200).json(projects);
    } else {
      res.status(200).json({ message: "There are no projects currently." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error while retrieving projects." });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const project = await Projects.get(id);
    res.status(200).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error while retrieving project." });
  }
});

router.get("/:id/actions", async (req, res) => {
  const id = req.params.id;
  try {
    const actions = await Projects.getProjectActions(id);
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({
      error: "There was an error while retrieving this project's actions."
    });
  }
});

router.post("/", async (req, res) => {
  const project = req.body;
  // TODO: THis validation throws an error that isn't being caught by the Try/Catch
  if (!project.name || !project.description) {
    res
      .status(400)
      .json({ error: "Please provide the project's name and description." });
  }
  try {
    const newProj = await Projects.insert(project);
    res.json(newProj);
  } catch (error) {
    res.status(500).json({
      error: "There was an error while creating the project."
    });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Projects.remove(id)
    .then(count => {
      if (count > 0) {
        res.send(204).end();
      } else {
        // Can't send json error message after status for some reason
        res.send(404);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while deleting the project."
      });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Projects.update(id, changes)
    .then(project => {
      if (project) {
        res.status(201).json(project);
      } else {
        res.status(404);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while updating the project."
      });
    });
});

module.exports = router;
