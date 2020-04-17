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
  db('Projects');
}

function findResources() {
  db('Resources');
}

function findTasks() {
  db('Tasks')
    .select('Tasks.id', 'Projects.name as Project name', 'Projects.description as Project Description', 'Tasks.description', 'Tasks.notes', 'Tasks.completed')
    .join('Projects', 'Tasks.project_id', 'Projects.id');
}

function addProject(project) {
  
}

function addResource(resource) {

}

function addTask(task) {

}
