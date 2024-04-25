export interface ICreateAssignmentGroupDto {
    name: string
    groupWeight: number
}

export class CreateAssignmentGroupDto implements ICreateAssignmentGroupDto {
    name: string
    groupWeight: number

    constructor(name: string, groupWeight: number) {
        this.name = name;
        this.groupWeight = groupWeight;
    }
}