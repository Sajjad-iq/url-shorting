import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';


export const useAxios = <T>(option: AxiosRequestConfig): [boolean, T | undefined, string, () => void] => {


    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T>();
    const [error, setError] = useState('');



    const request = () => {
        sendRequest();
    };

    const sendRequest = () => {
        setLoading(true);

        axios(option)
            .then((response) => {
                setError('');
                setData(response.data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    return [loading, data, error, request];
};
