import { QuizType, ScoringPolicy } from './Quiz';

export class CreateQuiz {
    title: string;
    description?: string | null = null;
    quizType: QuizType = QuizType.Assignment;
    assignmentGroupId: number;
    timeLimit?: number | null = null;
    shuffleAnswers?: boolean = false;
    showCorrectAnswers?: boolean = false;
    showCorrectAnserwsLastAttempt?: boolean = false;
    showCorrectAnswersAt?: Date;
    hideCorrectAnswersAt?: Date;
    allowedAttempts?: number = 1;
    scoringPolicy: ScoringPolicy = ScoringPolicy.KeepHighest;
    oneQuestionAtATime?: boolean = false;
    cantGoBack?: boolean = false;
    accessCode?: string = "";
    ipFilter?: string = "";
    dueAt?: Date;
    lockAt?: Date;
    unlockAt?: Date;
    published: boolean = true;
    oneTimeResults: boolean = false;
    onlyVisibleToOverrides: boolean = false;

    constructor(title: string, assignmentGroupId: number) {
        this.title = title;
        this.assignmentGroupId = assignmentGroupId;
    }

    static fromObject(title: string, assignmentGroupId: number, obj: any): CreateQuiz {
        let quiz = new CreateQuiz(title, assignmentGroupId);
        quiz.quizType = obj.quizType ? obj.quizType : QuizType.Assignment;
        quiz.description = obj.description ? obj.description : null;
        quiz.timeLimit = obj.timeLimit ? obj.timeLimit : null;
        quiz.shuffleAnswers = obj.shuffleAnswers ? obj.shuffleAnswers : false;
        quiz.showCorrectAnswers = obj.showCorrectAnswers ? obj.showCorrectAnswers : false;
        quiz.showCorrectAnserwsLastAttempt = obj.showCorrectAnserwsLastAttempt ? obj.showCorrectAnserwsLastAttempt : false;
        quiz.showCorrectAnswersAt = obj.showCorrectAnswersAt ? obj.showCorrectAnswersAt : null;
        quiz.hideCorrectAnswersAt = obj.hideCorrectAnswersAt ? obj.hideCorrectAnswersAt : null;
        quiz.allowedAttempts = obj.allowedAttempts ? obj.allowedAttempts : 1;
        quiz.scoringPolicy = obj.scoringPolicy ? obj.scoringPolicy : ScoringPolicy.KeepHighest;
        quiz.oneQuestionAtATime = obj.oneQuestionAtATime ? obj.oneQuestionAtATime : false;
        quiz.cantGoBack = obj.cantGoBack ? obj.cantGoBack : false;
        quiz.accessCode = obj.accessCode ? obj.accessCode : "";
        quiz.ipFilter = obj.ipFilter ? obj.ipFilter : "";
        quiz.dueAt = obj.dueAt ? obj.dueAt : null;
        quiz.lockAt = obj.lockAt ? obj.lockAt : null;
        quiz.unlockAt = obj.unlockAt ? obj.unlockAt : null;
        quiz.published = obj.published ? obj.published : true;
        quiz.oneTimeResults = obj.oneTimeResults ? obj.oneTimeResults : false;
        quiz.onlyVisibleToOverrides = obj.onlyVisibleToOverrides ? obj.onlyVisibleToOverrides : false;
        return quiz;
    }

    toFormData() {
        let formdata = new FormData();
        formdata.append("quiz[title]", this.title);
        if (this.description) formdata.append("quiz[description]", this.description);
        if (this.quizType) formdata.append("quiz[quiz_type]", this.quizType);
        if (this.assignmentGroupId) formdata.append("quiz[assignment_group_id]", this.assignmentGroupId.toString());
        if (this.timeLimit) formdata.append("quiz[time_limit]", this.timeLimit.toString());
        if (this.shuffleAnswers) formdata.append("quiz[shuffle_answers]", this.shuffleAnswers.toString());
        if (this.showCorrectAnswers) formdata.append("quiz[show_correct_answers]", this.showCorrectAnswers.toString());
        if (this.showCorrectAnserwsLastAttempt) formdata.append("quiz[show_correct_answers_last_attempt]", this.showCorrectAnserwsLastAttempt.toString());
        if (this.showCorrectAnswersAt && this.showCorrectAnswers != null) formdata.append("quiz[show_correct_answers_at]", this.showCorrectAnswersAt.toString());
        if (this.hideCorrectAnswersAt && this.hideCorrectAnswersAt != null) formdata.append("quiz[hide_correct_answers_at]", this.hideCorrectAnswersAt.toString());
        if (this.allowedAttempts) formdata.append("quiz[allowed_attempts]", this.allowedAttempts.toString());
        if (this.scoringPolicy) formdata.append("quiz[scoring_policy]", this.scoringPolicy);
        if (this.oneQuestionAtATime) formdata.append("quiz[one_question_at_a_time]", this.oneQuestionAtATime.toString());
        if (this.cantGoBack) formdata.append("quiz[cant_go_back]", this.cantGoBack.toString());
        if (this.accessCode) formdata.append("quiz[access_code]", this.accessCode);
        if (this.ipFilter) formdata.append("quiz[ip_filter]", this.ipFilter);
        if (this.dueAt) formdata.append("quiz[due_at]", this.dueAt.toString());
        if (this.lockAt) formdata.append("quiz[lock_at]", this.lockAt.toString());
        if (this.unlockAt) formdata.append("quiz[unlock_at]", this.unlockAt.toString());
        formdata.append("quiz[published]", this.published.toString());
        formdata.append("quiz[one_time_results]", this.oneTimeResults.toString());
        formdata.append("quiz[only_visible_to_overrides]", this.onlyVisibleToOverrides.toString());
        return formdata;
    }
}