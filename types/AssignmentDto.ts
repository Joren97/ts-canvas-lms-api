export enum GradingType {
    PassFail = 'pass_fail',
    Percent = 'percent',
    LetterGrade = 'letter_grade',
    GPA = 'gpa_scale',
    Points = 'points',
    NotGraded = 'not_graded'
}

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