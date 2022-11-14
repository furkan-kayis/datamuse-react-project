import { useReducer } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';
import { searchReducer } from './reducers/searchReducer';
import { SearchState } from './types';

function App() {
    const initialState: SearchState = {
        word: undefined,
        fetchedWords: undefined,
        code: undefined,
        relatedCode: undefined,
    };
    const [state, dispatch] = useReducer(searchReducer, initialState);
    return (
        <div className="App">
            <Search state={state} dispatch={dispatch} />
            <List state={state} />
        </div>
    );
}

export default App;
