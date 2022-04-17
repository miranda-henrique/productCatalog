import Image from 'next/image';
import Link from 'next/link';
import arrow from '../../../../public/back-arrow.png';
import productImg from '../../../../public/product-big.png';
import { ProductPrice } from '../../../components';

import styles from '../../../styles/pages/Product.module.css';


export default function ProductDetails() {
    return (
        <div className={styles.productDetailsContainer}>

            <div className={`d-flex flex-column card-base border-radius-20 ${styles.productDetails}`}
            >
                <Link href='/catalog'>
                    <a className={styles.productDetailsGoBack}>
                        <Image src={arrow} alt='Voltar' />
                        <h1 className={styles.textGoBack}>Voltar</h1>
                    </a>
                </Link>

                <div className={`row flex-column flex-lg-row align-items-center align-items-lg-start`}>

                    <div className={`col-xl-6`}>
                        <div className={`text-center ${styles.productDetailsCard} ${styles.imgContainer}`}
                        >
                            <Image
                                src={productImg}
                                alt='Nome do produto'
                                className={styles.productDetailsImage}
                            />
                        </div>

                        <div className={`d-md-flex justify-content-md-between flex-md-row flex-lg-column`}>
                            <h1 className={styles.productDetailsName}>
                                Computador Intel Core i7 2.4Ghz
                            </h1>
                            <ProductPrice price='4799,99' />
                        </div>
                    </div>

                    <div className={`col-xl-6 ${styles.productDetailsCard}`}>
                        <h1 className={styles.productDescriptionTitle}>
                            Descrição do Produto
                        </h1>
                        <p className={styles.productDescriptionText}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat dolores nostrum, necessitatibus, molestiae tenetur modi beatae fugit earum laudantium qui voluptates saepe tempore corrupti dolor autem dolore. Hic, inventore doloremque mollitia cumque officiis unde obcaecati. Dolorum labore sapiente, quae blanditiis id in aliquam, eos necessitatibus, aliquid molestiae dicta esse totam.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}