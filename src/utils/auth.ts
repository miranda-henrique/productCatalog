import queryString from 'query-string';
import { api } from './api';


export const loginUser = async (username: string, password: string) => {
    const data = queryString.stringify({
        username: username,
        password: password,
        grant_type: 'password',
    });

    const authToken = String(process.env.NEXT_PUBLIC_AUTH_TOKEN);

    await api.post(
        '/oauth/token',
        data,
        {
            headers: {
                Authorization: authToken,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then((response) => {
            const { access_token } = response.data;

            localStorage.setItem('@dscatalog/token', JSON.stringify(access_token));
        })
        .catch((error) => console.error(error));
};