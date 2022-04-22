import { useRouter } from 'next/router';
import { ProductResponse } from '../../../@types';
import { Sidebar } from '../../../components';
import { Products, Users, Categories } from './pages';


export default function Dashboard({ products }: ProductResponse) {
    const router = useRouter();

    const { index } = router.query;

    const returnRoute = () => {
        switch (index) {
            case 'products':
                return (
                    <Products products={products} />
                );
            case 'users':
                return (
                    <Users />
                );
            case 'categories':
                return (
                    <Categories />
                );
            default:
                return (
                    <Products products={products} />
                );
        }
    };


    return (
        <div className={`d-flex flex-column flex-lg-row`}>
            <Sidebar />
            {returnRoute()}
        </div>
    );
}