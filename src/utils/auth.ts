import jwtDecode from 'jwt-decode';
import queryString from 'query-string';
import { AccessToken, LoginResponse, Role } from '../@types';
import { api } from './api';


export const loginUser = async (username: string, password: string) => {
    const data = queryString.stringify({
        username: username,
        password: password,
        grant_type: 'password',
    });

    const authToken = String(process.env.NEXT_PUBLIC_AUTH_TOKEN);

    const login = await api.post(
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

            return response.data;
        })
        .catch((error) => console.error(error));

    return login;
};

export const isAllowedByRole = (routeRoles: Role[] = []) => {
    if (routeRoles.length === 0) return true;

    const { authorities } = getAccessTokenDecoded();

    return routeRoles.some((role) => authorities?.includes(role));
};

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();

    try {
        const tokenDecoded = jwtDecode(sessionData!.access_token);
        return tokenDecoded as AccessToken;
    } catch (error) {
        return {} as AccessToken;
    }
};

export const getSessionData = () => {
    if (typeof window !== 'undefined') {
        const sessionData = localStorage.getItem('authData') || '{}';
        const parsedSessionData = JSON.parse(sessionData);

        return parsedSessionData as LoginResponse;
    }
};