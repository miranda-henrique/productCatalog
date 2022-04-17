import Link from 'next/link';
import Image from 'next/image';
import productImg from '../../../public/product.png';
import ProductPrice from '../ProductPrice';

import styles from './ProductItem.module.css';


export default function ProductItem() {
    return (

        <Link href='/catalog/product/aodidsf'>

            <a className={`card-base border-radius-10 ${styles.productCard}`}>

                <div className={styles.cardTopContainer}>
                    <Image src={productImg} alt='Nome do Produto' className={styles.productCardImage} />
                </div>

                <div className={styles.cardBottomContainer}>
                    <h6>Nome do Produto</h6>
                    <ProductPrice price='1999,90' />
                </div>

            </a>

        </Link>
        
    );
}