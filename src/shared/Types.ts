export interface ClassType {
    bgColor: string;
    textColor: string;
    text: string;
}

export interface FeedbackData {
    id: number;
    rating: number;
    text: string;
}

export interface FeedbackContextValue {
    feedback: FeedbackData;
    deleteFeedback: (id: number) => void;
    addFeedback: (newFeedback: FeedbackData) => void 
}

export class DefaultContextValue implements FeedbackData {
    id: number
    text: string
    rating: number

    constructor (
        i: number,
        t: string,
        r: number 
    ) {
        this.id = i,
        this.text = t,
        this.rating = r

    } 
}