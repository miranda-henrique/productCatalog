import { ProductItemProps } from '../../@types';
import Image from 'next/image';

import styles from './ProductRow.module.css';
import ProductPrice from '../ProductPrice';
import { api } from '../../utils/api';


export default function ProductRow(product: ProductItemProps) {
    const deleteProduct = async (productId: number) => {
        await api({
            url: `/products/${productId}`,
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${JSON.parse(
                    localStorage.getItem('@dscatalog/token') ?? '')}`
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
                <button
                    type='button'
                    className={styles.btnEdit}
                >
                    Editar
                </button>
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