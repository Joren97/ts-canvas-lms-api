import { QuizType, ScoringPolicy } from './Quiz';

export class CreateQuiz {
    title: string;
    description?: string | null = null;
    quizType: QuizType;
    assignmentGroupId: number;
    timeLimit?: number | null = null;
    shuffleAnswers?: boolean = false;
    showCorrectAnswers?: boolean = true;
    showCorrectAnserwsLastAttempt?: boolean = false;
    showCorrectAnswersAt?: string = "null";
    hideCorrectAnswersAt?: string = "null";
    allowedAttempts?: number = 1;
    scoringPolicy: ScoringPolicy = ScoringPolicy.KeepHighest;
    oneQuestionAtATime?: boolean = false;
    cantGoBack?: boolean = false;
    accessCode?: string = "null";
    ipFilter?: string = "null";
    dueAt?: string = "null";
    lockAt?: string = "null";
    unlockAt?: string = "null";
    published: boolean = true;
    oneTimeResults: boolean = false;
    onlyVisibleToOverrides: boolean = false;

    constructor(title: string, quizType: QuizType, assignmentGroupId: number) {
        this.title = title;
        this.quizType = quizType;
        this.assignmentGroupId = assignmentGroupId;
    }

    toFormData() {
        let formdata = new FormData();
        formdata.append("quiz[title]", this.title);
        if (this.description) formdata.append("quiz[description]", this.description);
        formdata.append("quiz[quiz_type]", this.quizType);
        formdata.append("quiz[assignment_group_id]", this.assignmentGroupId.toString());
        if (this.timeLimit) formdata.append("quiz[time_limit]", this.timeLimit.toString());
        if (this.shuffleAnswers) formdata.append("quiz[shuffle_answers]", this.shuffleAnswers.toString());
        if (this.showCorrectAnswers) formdata.append("quiz[show_correct_answers]", this.showCorrectAnswers.toString());
        if (this.showCorrectAnserwsLastAttempt) formdata.append("quiz[show_correct_answers_last_attempt]", this.showCorrectAnserwsLastAttempt.toString());
        if (this.showCorrectAnswersAt) formdata.append("quiz[show_correct_answers_at]", this.showCorrectAnswersAt);
        if (this.hideCorrectAnswersAt) formdata.append("quiz[hide_correct_answers_at]", this.hideCorrectAnswersAt);
        if (this.allowedAttempts) formdata.append("quiz[allowed_attempts]", this.allowedAttempts.toString());
        formdata.append("quiz[scoring_policy]", this.scoringPolicy);
        if (this.oneQuestionAtATime) formdata.append("quiz[one_question_at_a_time]", this.oneQuestionAtATime.toString());
        if (this.cantGoBack) formdata.append("quiz[cant_go_back]", this.cantGoBack.toString());
        if (this.accessCode) formdata.append("quiz[access_code]", this.accessCode);
        if (this.ipFilter) formdata.append("quiz[ip_filter]", this.ipFilter);
        if (this.dueAt) formdata.append("quiz[due_at]", this.dueAt);
        if (this.lockAt) formdata.append("quiz[lock_at]", this.lockAt);
        if (this.unlockAt) formdata.append("quiz[unlock_at]", this.unlockAt);
        formdata.append("quiz[published]", this.published.toString());
        formdata.append("quiz[one_time_results]", this.oneTimeResults.toString());
        formdata.append("quiz[only_visible_to_overrides]", this.onlyVisibleToOverrides.toString());
        return formdata;
    }
}