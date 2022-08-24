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

    addTask(toAdd) {
        this.tasks.push(toAdd);
    }

    deleteTask(toDelete) {
        this.tasks = this.tasks.filter((task) => task !== toDelete);
    }
}
