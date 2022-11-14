import { Word } from '../types';

export const fetchWords = (
    code: string,
    word: string,
    relatedCode = '',
    url = 'https://api.datamuse.com/'
) =>
    fetch(`${url}words?${code}${relatedCode}=${word.replace(' ', '+')}`)
        .then((res) => {
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
        })
        .then((data: Word[]) => data);
