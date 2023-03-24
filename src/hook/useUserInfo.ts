import { useState } from 'react';
import { client } from '../HttpClient'

export interface UserInfo {
    firstname: string;
    lastname: string;
}

export interface User {
    user: UserInfo;
}

export const useUserInfo = () => {
    const [ loading, setLoading ] = useState(false);
    const [ response, setResponse ] = useState<User>({ user: { firstname: '', lastname: ''} });
    const [ errorMessage, setErrorMessage ] = useState('');

    const getUserInfo = async () : Promise<void> => {
        setLoading(true);
        setErrorMessage('');

        await client.get('/GetUserInfo')
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
    return { getUserInfo, loading, response, errorMessage }
}
