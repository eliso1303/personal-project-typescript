export interface SubjectSchema {
    id?: string;
    title: string,
    lessons: number,
    description: string
}

export class SubjectsModel {
    id: string;
    title: string;
    lessons: number;
    description: string;
    constructor(object: SubjectSchema) {
        this.id = '_' + Math.random().toString(36).substr(2, 9);
        this.title = object.title;
        this.lessons = object.lessons;
        this.description = object.description;
    }
}