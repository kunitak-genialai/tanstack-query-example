import { useState } from 'react';
import { client } from '../HttpClient'

export const useAuth = () => {
    const [ loading, setLoading ] = useState(false);
    const [ response, setResponse ] = useState(null);
    const [ errorMessage, setErrorMessage ] = useState('');

    const login = async (username: string) : Promise<void> => {
        setLoading(true);
        setErrorMessage('');

        await client.post('/Login', { username })
        .then((res) => {
            setLoading(false);
            setResponse(res.data);
            console.log('success:', res.data.username);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
            setErrorMessage(err);
        })
    }
    return { login, loading, response, errorMessage }
}