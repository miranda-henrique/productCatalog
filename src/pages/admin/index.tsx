import { useEffect, useState } from "react";
import Login from "./auth";
import Dashboard from './dashboard/[index]';


export default function Admin() {
    const [logged, setLogged] = useState(false);


    useEffect(() => {
        if (localStorage.getItem("@dscatalog/token")) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    }, []);


    if (logged) {
        return <Dashboard />;
    } else {
        return <Login />;
    }
}

