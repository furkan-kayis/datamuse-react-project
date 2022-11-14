import { SearchAction, SearchActionKind, SearchState } from '../types';

const { SET_CODE, SET_RELATED_CODE, SET_WORD, SET_WORDS } = SearchActionKind;

export function searchReducer(state: SearchState, action: SearchAction) {
    switch (action.type) {
        case SET_WORD:
            return {
                ...state,
                word: action.payload.word,
            };
        case SET_WORDS:
            return {
                ...state,
                fetchedWords: action.payload.fetchedWords,
                word: action.payload.word,
                code: action.payload.code,
                relatedCode: action.payload.relatedCode,
            };
        case SET_CODE:
            return {
                ...state,
                code: action.payload.code,
            };
        case SET_RELATED_CODE:
            return {
                ...state,
                relatedCode: action.payload.relatedCode,
            };
        default:
            return state;
    }
}
