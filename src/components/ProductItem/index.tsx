import Link from 'next/link';
import Image from 'next/image';
import productImg from '../../../public/product.png';
import ProductPrice from '../ProductPrice';

import styles from './ProductItem.module.css';
import { ProductItemProps } from '../../@types';


export default function ProductItem(product: ProductItemProps) {
    const { id, name, price, imgUrl } = product;

    return (

        <Link href={`/catalog/product/${id}`}>

            <a className={`card-base border-radius-10 ${styles.productCard}`}>

                <div className={styles.cardTopContainer}>
                    <Image
                        src={imgUrl}
                        width='158'
                        height='158'
                        alt={name}
                        className={styles.productCardImage}
                    />
                </div>

                <div className={styles.cardBottomContainer}>
                    <h6>{name}</h6>
                    <ProductPrice price={String(price)} />
                </div>

            </a>

        </Link>

    );
}