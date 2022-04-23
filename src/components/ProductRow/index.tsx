import { ProductItemProps } from '../../@types';
import Image from 'next/image';
import Link from 'next/link';

import styles from './ProductRow.module.css';
import ProductPrice from '../ProductPrice';
import { api } from '../../utils/api';


export default function ProductRow(product: ProductItemProps) {
    const deleteProduct = async (productId: number) => {

        let localToken: string = '';
        if (typeof window !== 'undefined') {
            localToken = String(localStorage.getItem('@dscatalog/item'));
        }

        await api({
            url: `/products/${productId}`,
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${JSON.parse(localToken) ?? ''}`
            }
        });

        history.go(0);
    };

    return (
        <div className={`d-flex flex-column flex-md-row align-items-center p-4 ${styles.productRowContainer}`}
        >
            <div className={styles.imgContainer}>
                <Image
                    src={product.imgUrl}
                    alt={product.name}
                    width='100%'
                    height='100%'
                />
            </div>
            <div className={styles.productRowDetails}>
                <h4>{product.name}</h4>
                <ProductPrice price={String(product.price)} />
                <div className={`d-flex flex-row ${styles.categories}`}>
                    {
                        product.categories.map((category) => (
                            <div key={category.id} className={styles.category}>{category.name}</div>
                        ))
                    }
                </div>
            </div>
            <div className={`d-flex flex-row-reverse flex-md-column justify-content-between ${styles.buttonContainer}`}
            >
                <Link href={`/admin/dashboard/product/${product.id}`} passHref>
                    <button
                        type='button'
                        className={styles.btnEdit}
                    >
                        Editar
                    </button>
                </Link>
                <button
                    type='button'
                    className={styles.btnDelete}
                    onClick={() => deleteProduct(product.id)}
                >
                    Excluir
                </button>
            </div>
        </div>
    );
}