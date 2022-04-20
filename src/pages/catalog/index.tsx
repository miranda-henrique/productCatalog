import { ProductResponse } from '../../@types';
import { ProductItem } from '../../components';

import styles from '../../styles/pages/Catalog.module.css';
import { api } from '../../utils/api';


export default function Catalog({ products }: ProductResponse) {

    return (
        <div className={`container`}>
            <h3 className={`my-4`}>Catálogo de Produtos</h3>
            <div className={styles.catalogProducts}>
                {
                    products.map((product, index) => (
                        <ProductItem key={index} {...product} />
                    ))
                }
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await api.get('/products?page=0&size=12&sort=name,asc');

    const products = response.data.content;

    return {
        props: {
            products: products,
        }
    };
}