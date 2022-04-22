import Link from 'next/link';
import { ProductResponse } from '../../../../../@types';
import { ProductRow } from '../../../../../components';

import styles from '../../../../../styles/pages/dashboardProduct.module.css';
import { api } from '../../../../../utils/api';


export default function ProductsAdmin({ products }: ProductResponse) {
    return (
            <div style={{ width: '100%', padding: 40 }}>
                {products.map((product) => (
                    <ProductRow key={product.id} {...product} />
                ))}
            </div>
    );
}

