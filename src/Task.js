export default class Task {
    constructor(name, dueDate, priority, notes) {
        (this.name = name),
            (this.dueDate = dueDate),
            (this.priority = priority),
            (this.notes = notes);
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
    }

    getDate() {
        return this.dueDate;
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
