import Project from './Project';

export default class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('Main'));
    }

    setProjects(projects) {
        this.projects = projects;
    }

    getProjects() {
        return this.projects;
    }

    addProject(newProject) {
        this.projects.push(newProject);
    }

    deleteProject(projectName) {
        const projectToDelete = this.projects.find(
            (project) => project.getName() === projectName
        );
        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }
}
