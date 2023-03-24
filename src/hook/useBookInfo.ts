import { useState } from 'react';
import { client } from '../HttpClient'
import { BookInfo } from './useBookList';

export const useBookInfo = () => {
    const [ loading, setLoading ] = useState(false);
    const [ response, setResponse ] = useState<BookInfo>();
    const [ errorMessage, setErrorMessage ] = useState('');

    const getBookInfo = async (bookId: number) : Promise<void> => {
        setLoading(true);
        setErrorMessage('');

        await client.get('/GetBookInfo/' + bookId)
        .then((res) => {
            setLoading(false);
            setResponse(res.data);
            console.log('success:', res.data);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
            setErrorMessage(err.message);
        })
    }
    return { getBookInfo, loading, response, errorMessage }
}