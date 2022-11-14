import { Dispatch, FormEvent } from 'react';
import { SearchAction, SearchActionKind, SearchState } from '../types';
import { fetchWords } from '../services/search-service';
import searchTypes from '../assets/searchTypes.json';

interface SearchProps {
    state: SearchState;
    dispatch: Dispatch<SearchAction>;
}

export default function Search({ state, dispatch }: SearchProps) {
    const related = searchTypes.find((st) => st.code === 'rel_');
    const { code, word, relatedCode } = state;
    const { SET_CODE, SET_RELATED_CODE, SET_WORD, SET_WORDS } = SearchActionKind;
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetchWords(
            state.code || '',
            state.word || '',
            state.code === 'rel_' ? relatedCode : ''
        ).then((words) =>
            dispatch({
                type: SET_WORDS,
                payload: { fetchedWords: words, word: '', code: '', relatedCode: '' },
            })
        );
    };
    const disabled = !word || !code || (code === 'rel_' && !relatedCode);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="word">Your Word</label>
                <input
                    type="text"
                    id="word"
                    value={word}
                    onChange={(e) =>
                        dispatch({ type: SET_WORD, payload: { word: e.target.value } })
                    }
                />
            </div>

            <div>
                <label htmlFor="types">Types</label>
                <select
                    id="types"
                    className="codes"
                    placeholder="select"
                    value={state.code}
                    onChange={(e) =>
                        dispatch({ type: SET_CODE, payload: { code: e.target.value } })
                    }
                >
                    <option value="" selected style={{ display: 'none' }}>
                        Select
                    </option>
                    {searchTypes.map((t, i) => (
                        <option key={i} value={t.code}>
                            {t.description}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                {code === 'rel_' && (
                    <>
                        <label htmlFor="rel">Related</label>
                        <select
                            id="rel"
                            className="codes"
                            onChange={(e) =>
                                dispatch({
                                    type: SET_RELATED_CODE,
                                    payload: { relatedCode: e.target.value },
                                })
                            }
                        >
                            <option value="" selected style={{ display: 'none' }}>
                                Select
                            </option>
                            {related?.codes?.map((c, i) => (
                                <option key={i} value={c.code}>
                                    {c.description} ({c.example})
                                </option>
                            ))}
                        </select>
                    </>
                )}
            </div>

            <button disabled={disabled} type="submit">
                Search
            </button>
        </form>
    );
}
