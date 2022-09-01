export default class Task {
    constructor(name, dueDate, priority, notes, taskId) {
        (this.name = name),
            (this.dueDate = dueDate),
            (this.priority = priority),
            (this.notes = notes),
            (this.compressed = true),
            (this.taskId = taskId);
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getPriority() {
        return this.priority;
    }

    setNotes(notes) {
        this.notes = notes;
    }

    getNotes() {
        return this.notes;
    }
}
