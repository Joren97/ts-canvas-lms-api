class Assignment {
    name: string;
    assignmentGroupId?: number;

    constructor(name: string, assignmentGroupId?: number) {
        this.name = name;
        this.assignmentGroupId = assignmentGroupId;
    }
}

export default Assignment;