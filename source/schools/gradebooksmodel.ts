import { Validate } from './validate';
import { GroupsModel } from './groupsmodel';
import { TeachersModel } from './teachersmodel';
import { LMSModel } from './lmsmodel';

interface grade {
    level: number;
    id: string;
    records: record[];
}

interface record {
    pupilId: string,
    teacherId: string,
    subjectId: string,
    lesson: number,
    mark: number
}

export class GradebooksModel {
    grades: Map<string, grade>;
    groups: GroupsModel;
    teachers: TeachersModel;
    lms: LMSModel;
    constructor(groups: GroupsModel, teachers: TeachersModel, lms: LMSModel) {
        this.grades = new Map();
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    add(level: number, gradeId: string) {
        let id = '_' + Math.random().toString(36).substr(2, 9);
        this.grades.set(gradeId, { level, id, records: [] })
        return id;
    }

    clear() {
        if (arguments.length > 0) {
            throw new Error("please don't pass the parameters");
        } else {
            this.grades.clear();
        }
    }

    addRecord(gradebookId: string, record: record) {
        const grade = this.grades.get(gradebookId);
        if (grade) {
            grade.records.push(record);
        } else {
            throw new Error("error");
        }
    }

    read(gradebookId: string, pupilId: string) {
        const grade = this.grades.get(gradebookId);

        let gradebookRead = {
            'name': this.groups.pupils.name,
            "records": [
                {
                    teacher: 'Elizabeth Holms',
                    subject: 'History',
                    lesson: 1,
                    mark: 9
                }
            ]
        };
        console.log(grade);
    }

    readAll(gradebookId: string) {
        this.read(gradebookId, )
    }
}