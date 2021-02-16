const db = require('../data/db-config');

module.exports = {
  findProjects,
  findResources,
  findTasks,
  addProject,
  addResource,
  addTask,
};

function findProjects() {
  return db('Projects');
}

function findResources() {
  return db('Resources');
}

function findTasks() {
  return db('Tasks')
    .select('Tasks.id', 'Projects.name as Project name', 'Projects.description as Project description', 'Tasks.description', 'Tasks.notes', 'Tasks.completed')
    .join('Projects', 'Tasks.project_id', 'Projects.id');
}

async function addProject(project) {
  const [id] = await db('Projects').insert(project, 'id');
  return db('Projects').where('id', id);
}

async function addResource(resource) {
  const [id] = await db('Resources').insert(resource, 'id');
  return db('Resources').where('id', id);
}

async function addTask(task) {
  const [id] = await db('Tasks').insert(task, 'id');
  return db('Tasks').where('id', id);
}
