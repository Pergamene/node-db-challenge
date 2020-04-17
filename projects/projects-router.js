const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.findProjects();
    if (projects) {
      res.status(200).json(projects);
    } else {
      res.status(404).json({ message: 'There are no projects.' });
    }
  } catch {
    res.status(500).json({ error: 'There was a problem getting the projects.' });
  }
});

router.get('/resource', async (req, res) => {
  try {
    const resources = await Projects.findResources();
    if (resources) {
      res.status(200).json(resources);
    } else {
      res.status(404).json({ message: 'There are no resources.' });
    }
  } catch {
    res.status(500).json({ error: 'There was a problem getting the resources.' });
  }
});

router.get('/task', async (req, res) => {
  try {
    const tasks = await Projects.findTasks();
    console.log(tasks);
    if (tasks) {
      res.status(200).json(tasks);
    } else {
      res.status(404).json({ message: 'There are no tasks.' });
    }
  } catch {
    res.status(500).json({ error: 'There was a problem getting the tasks.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = await Projects.addProject(req.body);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(400).json({ message: 'There was a problem getting the new project.' });
    }
  } catch {
    res.status(500).json({ error: 'There was a problem adding the resourse.' });
  }
});

router.post('/resource', async (req, res) => {
  try {
    const resource = await Projects.addResource(req.body);
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(400).json({ message: 'There was a problem getting the new resource.' });
    }
  } catch {
    res.status(500).json({ error: 'There was a problem adding the resourse.' });
  }
});

router.post('/task', async (req, res) => {
  try {
    const task = await Projects.addTask(req.body);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(400).json({ message: 'There was a problem getting the new task.' });
    }
  } catch {
    res.status(500).json({ error: 'There was a problem adding the task.' });
  }
});

module.exports = router;
