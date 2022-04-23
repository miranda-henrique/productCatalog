import { useEffect, useState } from "react";
import { ProductResponse } from '../../@types';
import { api } from '../../utils/api';
import Login from "./auth";
import Dashboard from './dashboard/[index]';


export default function Admin({ products }: ProductResponse) {
    const [logged, setLogged] = useState(false);


    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem("@dscatalog/token")) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    }, []);


    if (logged) {
        return <Dashboard products={products} />;
    } else {
        return <Login />;
    }
}

export async function getServerSideProps() {
    const params = {
        page: 0,
        size: 12,
        sort: 'name, asc',
    };

    const response = await api({
        url: '/products',
        params,
    });

    const products = response.data.content;

    return {
        props: {
            products,
        }
    };
}

