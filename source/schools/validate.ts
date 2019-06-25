interface schema {
    dateOfBirth: string,
    sex: string
}


export class Validate {
    static moreValidate(object: schema) {
        if (object.dateOfBirth.indexOf('.') !== 2 || object.dateOfBirth.lastIndexOf('.') !== 5 || +object.dateOfBirth.substring(0, 2) > 31 || +object.dateOfBirth.substring(3, 5) > 12) {
            throw new Error("data format is not right");
        }

        if (object.sex !== 'male' && object.sex !== 'femail') {
            throw new Error("must be male or female");
        }
    }
}
