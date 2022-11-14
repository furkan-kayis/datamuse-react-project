export interface Word {
    word: string;
    score: number;
    tags?: string[];
}
export enum SearchActionKind {
    SET_WORD = 'SET_WORD',
    SET_WORDS = 'SET_WORDS',
    SET_CODE = 'SET_CODE',
    SET_RELATED_CODE = 'SET_RELATED_CODE',
}
export interface SearchState {
    word?: string;
    fetchedWords?: Word[];
    code?: string;
    relatedCode?: string;
}
export interface SearchAction {
    type: SearchActionKind;
    payload: SearchState;
}
