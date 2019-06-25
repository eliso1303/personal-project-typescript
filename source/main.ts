 import { SubjectsModel, LMSModel, TeachersModel, PupilsModel, GroupsModel, GradebooksModel } from './schools';

const history = new SubjectsModel({
    title: 'History',
    lessons: 24,
    description: 'tralala'
});

const geo = new SubjectsModel({
    title: 'Geo',
    lessons: 25,
    description: 'tralala'
});
const geo2 = new SubjectsModel({
    title: 'Geo',
    lessons: 25,
    description: 'tralala'
});

// will return subjectId

console.log(history);
console.log(geo.id);
console.log(geo2.id);

console.log('------------ subject end -------------');

const lms = new LMSModel();
lms.add(history);
lms.add(geo);
lms.remove(history);

console.log(lms);

// // will return true or false. Answer will be true if we added this subject to lms
console.log(lms.verify(geo));

// // will return array of registered subjects
console.log(lms.readAll());

console.log('------------ lms end -------------');

// Create new Teacher from Teacher's data
let data = {
    name: {
        first: "John",
        last: "Doe"
    },
    image: "string",
    dateOfBirth: "31.12.2019",
    emails: [
        {
            "email": "aaa@aaa.com",
            "primary": true
        },
        {
            "email": "bbb@bbb.com",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "85868866586",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "string"
        }
    ],
    description: "description",
}

let data2 = {
    name: {
        first: "aaaa",
        last: "ffff"
    },
    image: "strifffffff",
    dateOfBirth: "02.03.2019",
    emails: [
        {
            "email": "ttttt",
            "primary": true
        },
        {
            "email": "ttttt",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "aaaaa"
        }
    ],
    
}


let newTeacherInfo = {
    name: {
        first: "teacher",
        last: "teacherlastaname"
    },
    image: "strifffffff",
    dateOfBirth: "02.03.2019",
    emails: [
        {
            "email": "ttttt",
            "primary": true
        },
        {
            "email": "ttttt",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "aaaaa"
        }
    ],
    
}
// Create new Teacher from Teacher's data
const teachers = new TeachersModel();

// Create a new teacher
const teacherId = teachers.add(data);
const teacherId2 = teachers.add(data2);
console.log(teacherId2);


// will return Teachers data including teacher's id
teachers.read(teacherId);

// will update Teacher. This method should use the same validation as a constructor method
// const teacherId = teachers.update(teacherId, newTeacherInfo);

// will remove techer
teachers.remove(teacherId);

console.log('------------ teachers end -------------');
const pupildata = {
    name: {
        first: "pupil1",
        last: "pupil1lastaname"
    },
    image: "strifffffff",
    dateOfBirth: "02.03.2019",
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male",
}

const updatedProfile = {
    name: {
        first: "pupil2",
        last: "pupil2lastaname"
    },
    image: "strifffffff",
    dateOfBirth: "02.03.2019",
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male",
}

const pupils = new PupilsModel();

// Create a new pupil
const pupil = pupils.add(pupildata);


// will return Pupils data including pupil's id
pupils.read(pupil.id);

// will update Pupil. This method should use the same validation as a constructor method
pupils.update(pupil.id, updatedProfile);


// will remove pupil
pupils.remove(pupil.id);

console.log('------------ pupils end -------------');
const room = 236;
const groups = new GroupsModel();

// Create a new group
const groupId = groups.add(room);

// Add this pupil to this group
groups.addPupil(groupId, pupil);

// Remove this pupil from this group
// groups.removePupil(groupId, pupil.id);



// Update room for this group
groups.update(groupId, {
  room: 237
});

// Read information about group
groups.read(groupId);
// {
//   id: 'JEF5H43H'
//   room: 237
// }

// It will return array of groups
console.log(groups.readAll());

console.log('------------ groups end -------------');

const pupilId = pupil.id;
const gradebooks = new GradebooksModel(groups, teachers, lms);

// Create a new gradebook
const level = 1;
const gradebookId = gradebooks.add(level, groupId);


// Destroy all data inside this gradebook
gradebooks.clear();

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};

gradebooks.addRecord(gradebookId, record);

// Read information about oliver results
const oliver = gradebooks.read(gradebookId, pupilId);
// {
//   name: 'Oliver Black',
//   records: [
//     {
//       teacher: 'Elizabeth Holms',
//       subject: 'History',
//       lesson: 1,
//       mark: 9
//     }
//   ]
// }

// Read information about all students in this gradebook
// const students = gradebooks.readAll(gradebookId); // It will return the array of objects