export interface ICreateAssignmentDto {
    name: string;
    assignmentGroupId: number;
}

export class CreateAssignmentDto implements ICreateAssignmentDto {
    name: string;
    assignmentGroupId: number;

    constructor(name: string, assignmentGroupId: number) {
        this.name = name;
        this.assignmentGroupId = assignmentGroupId;
    }
}