export enum QuizType {
    Practice = "practice_quiz",
    Assignment = "assignment",
    Graded = "graded_quiz",
    Survey = "survey"
}

export enum ScoringPolicy {
    KeepHighest = "keep_highest",
    KeepLatest = "keep_latest"
}

export class Quiz {
    id: number;
    title: string;
    htmlUrl: string;
    mobileUrl: string;
    previewUrl?: string;
    description: string;
    quizType: QuizType
    assignmentGroupId: number;
    timeLimit: number;
    shuffleAnswers: boolean;
    hideResults: null | 'always' | 'until_after_last_attempt';
    showCorrectAnswers: boolean;
    showCorrectAnswersLastAttempt?: boolean;
    showCorrectAnswersAt?: string;
    hideCorrectAnswersAt?: string;
    oneTimeResults: boolean;
    scoringPolicy: ScoringPolicy
    allowedAttempts: number;
    oneQuestionAtATime: boolean;
    questionCount: number;
    pointsPossible: number;
    cantGoBack: boolean;
    accessCode?: string;
    ipFilter?: string;
    dueAt?: string;
    lockAt?: string | null;
    unlockAt?: string;
    published: boolean;
    unpublishable: boolean;
    lockedForUser: boolean;
    lockInfo?: any;
    lockExplanation?: string;
    speedGraderUrl?: string;
    quizExtensionsUrl?: string;
    permissions?: any;
    allDates?: any;
    versionNumber: number;
    questionTypes: string[];
    anonymousSubmissions?: boolean;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.htmlUrl = data.html_url;
        this.mobileUrl = data.mobile_url;
        this.previewUrl = data.preview_url;
        this.description = data.description;
        this.quizType = data.quiz_type;
        this.assignmentGroupId = data.assignment_group_id;
        this.timeLimit = data.time_limit;
        this.shuffleAnswers = data.shuffle_answers;
        this.hideResults = data.hide_results;
        this.showCorrectAnswers = data.show_correct_answers;
        this.showCorrectAnswersLastAttempt = data.show_correct_answers_last_attempt;
        this.showCorrectAnswersAt = data.show_correct_answers_at;
        this.hideCorrectAnswersAt = data.hide_correct_answers_at;
        this.oneTimeResults = data.one_time_results;
        this.scoringPolicy = data.scoring_policy;
        this.allowedAttempts = data.allowed_attempts;
        this.oneQuestionAtATime = data.one_question_at_a_time;
        this.questionCount = data.question_count;
        this.pointsPossible = data.points_possible;
        this.cantGoBack = data.cant_go_back;
        this.accessCode = data.access_code;
        this.ipFilter = data.ip_filter;
        this.dueAt = data.due_at;
        this.lockAt = data.lock_at;
        this.unlockAt = data.unlock_at;
        this.published = data.published;
        this.unpublishable = data.unpublishable;
        this.lockedForUser = data.locked_for_user;
        this.lockInfo = data.lock_info;
        this.lockExplanation = data.lock_explanation;
        this.speedGraderUrl = data.speedgrader_url;
        this.quizExtensionsUrl = data.quiz_extensions_url;
        this.permissions = data.permissions;
        this.allDates = data.all_dates;
        this.versionNumber = data.version_number;
        this.questionTypes = data.question_types;
        this.anonymousSubmissions = data.anonymous_submissions;
    }
}

