import { SubjectSchema } from './subjectsmodel';

export class LMSModel {
    subjects: Map<string, SubjectSchema>;
    constructor() {
        this.subjects = new Map();
    }
    async add(subject: SubjectSchema) {
        this.subjects.set(subject.id, subject);
    }
    async remove(subject: { id: string; }) {
        if (this.subjects.has(subject.id)) {
            this.subjects.delete(subject.id);
        } else {
            throw new Error('Can\'t delete');
        }
    }

    async verify(subject: { id: string; }) {
        return this.subjects.has(subject.id) ? true : false;
    }

    readAll() {
        if (arguments.length > 0) {
            throw new Error("must not be arguments")
        } else {
            let registeredSubjects: object[] | { 'subjectId': string; }[] = [];
            this.subjects.forEach((value, key, ownMap) => {
                registeredSubjects.push({ 'subjectId': key });
            });
            return registeredSubjects;
        }
    }
}