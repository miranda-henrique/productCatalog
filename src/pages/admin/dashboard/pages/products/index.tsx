import Link from 'next/link';
import { ProductResponse } from '../../../../../@types';
import { ProductRow } from '../../../../../components';


export default function Products({ products }: ProductResponse) {
    return (
        <div className={`products-page`}>
            <Link href='/admin/dashboard/product/new' passHref>
                <button type='button' className={`product-add-button`}>
                    Adicionar
                </button>
            </Link>
            {products && products.map((product) => (
                <ProductRow key={product.id} {...product} />
            ))}
        </div>
    );
}

