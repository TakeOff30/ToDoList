export default class Project {
    constructor(name) {
        (this.name = name), (this.tasks = []);
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    getTasks() {
        return this.tasks;
    }

    getTask(taskId) {
        return this.tasks.find((task) => task.taskId == taskId);
    }

    addTask(toAdd) {
        this.tasks.push(toAdd);
    }

    deleteTask(toDelete) {
        this.tasks = this.tasks.filter((task) => task !== toDelete);
    }
}
