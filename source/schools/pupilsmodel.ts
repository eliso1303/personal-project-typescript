import { Validate } from './validate';

interface phones {
    phone: string,
    primary: boolean
}

export interface PupilSchema {
    id?: string;
    name: {
        first: string,
        last: string
    },
    image: string,
    dateOfBirth: string, // format date
    phones: phones[],
    sex: string, // male OR female
    description?: string
}

export class PupilsModel {
    pupils: Map<string, PupilSchema>;
    constructor() {
        this.pupils = new Map();
    }

    add(pupil: PupilSchema) {
        Validate.moreValidate(pupil);
        let id = '_' + Math.random().toString(36).substr(2, 9);
        pupil.id = id;
        this.pupils.set(id, pupil);
        return this.pupils.get(id);
    }


    read(id: string) {
        if (this.pupils.has(id)) {
            return this.pupils.get(id);
        } else {
            throw new Error('there is no such pupil');
        }
    }

    update(id: string, newInfo: PupilSchema) {
        Validate.moreValidate(newInfo);
        return this.pupils.set(id, newInfo);
    }

    remove(id: string) {
        if (this.pupils.has(id)) {
            this.pupils.delete(id);
        } else {
            throw new Error('there is no such pupil');
        }
    }
}