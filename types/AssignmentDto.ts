export interface IAssignmentDto {
    id: number;
    name: string;
    assignmentGroupId: number;
}

export class AssignmentDto implements IAssignmentDto {
    id: number;
    name: string;
    assignmentGroupId: number;

    constructor(id: number, name: string, assignmentGroupId: number) {
        this.id = id;
        this.name = name;
        this.assignmentGroupId = assignmentGroupId;
    }
}