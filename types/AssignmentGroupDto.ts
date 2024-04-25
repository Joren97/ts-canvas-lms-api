export interface IAssignmentGroupDto {
    id: number
    name: string
    groupWeight: number
}

export class AssignmentGroupDto implements IAssignmentGroupDto {
    id: number
    name: string
    groupWeight: number

    constructor(id: number, name: string, groupWeight: number) {
        this.id = id;
        this.name = name;
        this.groupWeight = groupWeight;
    }
}