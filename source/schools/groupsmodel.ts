import { Validate } from './validate';
import { PupilSchema } from './pupilsmodel';

interface phones {
    phone: string,
    primary: boolean
}

interface Group {
    roomNum: number;
    pupils: PupilSchema[]
}

export class GroupsModel {
    groups: Map<string, Group>;
    constructor() {
        this.groups = new Map();
    }

    add(roomNum: number) {
        let id = '_' + Math.random().toString(36).substr(2, 9);
        this.groups.set(id, { roomNum, pupils: [] });
        return id;
    }

    addPupil(groupId: string, pupil: PupilSchema) {
        if (this.groups.has(groupId)) {
            Validate.moreValidate(pupil);
            let group = this.groups.get(groupId);
            if (group) {
                group.pupils.push(pupil);
            }
        } else {
            throw new Error("there is no such group");
        }
    }

    removePupil(groupId: string, pupilId: string) {
        if (this.groups.has(groupId)) {
            for (let item of this.groups.get(groupId).pupils) {
                if (item.id === pupilId) {
                    let group = this.groups.get(groupId);
                    if (group) {
                        return group.pupils.pop();
                    }
                }
            }
        } else {
            throw new Error("there is no such group");
        }
    }

    update(groupId: string, obj: { room: number; }) {
        if (this.groups.has(groupId)) {
            this.groups.get(groupId).roomNum = obj.room;
        } else {
            throw new Error("We havn't such group!");
        }
    }

    read(groupId: string) {
        if (this.groups.has(groupId)) {
            let groupInfo = {
                'id': groupId,
                'room': this.groups.get(groupId).roomNum
            };
            return groupInfo;
        }
        else {
            throw new Error("group not found")
        }
    }

    readAll() {
        if (arguments.length > 0) {
            throw new Error("please don't pass the parameters");
        } else {
            return Array.from(this.groups);
        }
    }
}