import { Validate } from './validate';

interface emails {
    email: string,
    primary: boolean
}

interface phones {
    phone: string,
    primary: boolean
}

interface subjects {
    subject: string
}

interface TeacherSchema {
    name: {
        first: string,
        last: string
    },
    image: string,
    dateOfBirth: string,
    emails: emails[],
    phones: phones[],
    sex: string,
    subjects: subjects[],
    description?: string
}

export class TeachersModel {
    teachers: Map<string, TeacherSchema>;
    constructor() {
        this.teachers = new Map();
    }

    add(teacher: TeacherSchema) {
        Validate.moreValidate(teacher);
        let id = '_' + Math.random().toString(36).substr(2, 9);
        this.teachers.set(id, teacher);
        return id;
    }

    read(id: string) {
        if (this.teachers.has(id)) {
            return this.teachers.get(id);
        } else {
            throw new Error('there is no such teacher');
        }
    }

    update(id: string, newInfo: TeacherSchema) {
        Validate.moreValidate(newInfo);
        return this.teachers.set(id, newInfo);
    }

    remove(id: string) {
        if (this.teachers.has(id)) {
            this.teachers.delete(id);
        } else {
            throw new Error('there is no such teacher');
        }
    }
}