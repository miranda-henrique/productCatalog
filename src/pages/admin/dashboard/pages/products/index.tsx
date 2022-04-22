import Link from 'next/link';
import { ProductResponse } from '../../../../../@types';
import { ProductRow } from '../../../../../components';


export default function ProductsAdmin({ products }: ProductResponse) {
    return (
        <div className={`products-page`}>
            <Link href='/admin/dashboard/product/new'>
                <button type='button' className={`product-add-button`}>
                    Adicionar
                </button>
            </Link>
            {products.map((product) => (
                <ProductRow key={product.id} {...product} />
            ))}
        </div>
    );
}

