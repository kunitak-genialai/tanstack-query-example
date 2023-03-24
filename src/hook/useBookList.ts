import { useState } from 'react';
import { client } from '../HttpClient';

export interface BookInfo {
  bookId: number,
  bookName: string,
  publisherName: string,
  authorName: string,
  isin: string
}
  
export interface BookInfoList {
  list: BookInfo[]
}

export const useBookList = () => {
    const [ loading, setLoading ] = useState(false);
    const [ response, setResponse ] = useState<BookInfoList>({ list: [] });
    const [ errorMessage, setErrorMessage ] = useState('');

    const getBookList = async () : Promise<void> => {
        setLoading(true);
        setErrorMessage('');

        await client.get('/GetBookInfo')
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
    return { getBookList, loading, response, errorMessage }
}