import { SearchState } from '../types';

interface ListProps {
    state: SearchState;
}

function List({ state }: ListProps) {
    const { fetchedWords } = state;
    return fetchedWords?.length === 0 ? (
        <h2 style={{ textAlign: 'center' }}>No Data</h2>
    ) : (
        <div>{fetchedWords?.map((w, i) => `${i !== 0 ? ',' : ''} ${w.word}`)}</div>
    );
}

export default List;
