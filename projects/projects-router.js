const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProjects();
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
    const resources = await Projects.getResources();
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
    const tasks = await Projects.getTasks();
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
  
});

router.post('/resource', async (req, res) => {

});

router.post('/task', async (req, res) => {

});

module.exports = router;
