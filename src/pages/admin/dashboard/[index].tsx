import { useRouter } from 'next/router';
import { Sidebar } from '../../../components';
import { Products, Users, Categories } from './pages';


export default function Dashboard() {
    const router = useRouter();

    const { index } = router.query;

    const returnRoute = () => {
        switch (index) {
            case 'products':
                return (
                    <Products />
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
                    <Products />
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