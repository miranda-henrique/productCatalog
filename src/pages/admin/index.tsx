import { useState, useEffect } from 'react';
import AuthPage from './auth';
import Dashboard from './dashboard';


export default function AdminPage() {
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('@dscatalog/item')) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    }, []);


    if (logged) {
        return (
            <Dashboard />
        );
    } else {
        return (
            <AuthPage />
        );
    }
}