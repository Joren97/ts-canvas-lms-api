export class CreateAssignmentDto {
    name: string;
    position?: number | null = null;
    pointsPossible?: number | null = null;
    gradingType?: string | null = null;
    assignmentGroupId: number;
    dueAt?: string;
    lockAt?: string;
    unlockAt?: string;
    descritpion?: string;
    published: boolean = true;
    omitFromFinalGrade: boolean = false;
    allowedAttempts: number = 1;

    constructor(name: string, assignmentGroupId: number) {
        this.name = name;
        this.assignmentGroupId = assignmentGroupId;
    }

    static fromObject(name: string, assignmentGroupId: number, obj: any): CreateAssignmentDto {
        let assignment = new CreateAssignmentDto(name, assignmentGroupId);
        assignment.position = obj.position ? obj.position : null;
        assignment.pointsPossible = obj.pointsPossible ? obj.pointsPossible : null;
        assignment.gradingType = obj.gradingType ? obj.gradingType : null;
        assignment.dueAt = obj.dueAt ? obj.dueAt : null;
        assignment.lockAt = obj.lockAt ? obj.lockAt : null;
        assignment.unlockAt = obj.unlockAt ? obj.unlockAt : null;
        assignment.descritpion = obj.descritpion ? obj.descritpion : null;
        assignment.published = obj.published ? obj.published : true;
        assignment.omitFromFinalGrade = obj.omitFromFinalGrade ? obj.omitFromFinalGrade : false;
        assignment.allowedAttempts = obj.allowedAttempts ? obj.allowedAttempts : 1;
        return assignment;
    }

    toFormData() {
        let formdata = new FormData();
        formdata.append("assignment[name]", this.name);
        if (this.assignmentGroupId) formdata.append("assignment[assignment_group_id]", this.assignmentGroupId.toString());
        if (this.position) formdata.append("assignment[position]", this.position.toString());
        if (this.pointsPossible) formdata.append("assignment[points_possible]", this.pointsPossible.toString());
        if (this.gradingType) formdata.append("assignment[grading_type]", this.gradingType);
        if (this.dueAt) formdata.append("assignment[due_at]", this.dueAt);
        if (this.lockAt) formdata.append("assignment[lock_at]", this.lockAt);
        if (this.unlockAt) formdata.append("assignment[unlock_at]", this.unlockAt);
        if (this.descritpion) formdata.append("assignment[descritpion]", this.descritpion);
        formdata.append("assignment[published]", this.published.toString());
        formdata.append("assignment[omit_from_final_grade]", this.omitFromFinalGrade.toString());
        formdata.append("assignment[allowed_attempts]", this.allowedAttempts.toString());
        return formdata;
    }
}