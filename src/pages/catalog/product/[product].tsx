import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '../../../../public/back-arrow.png';
import { ProductProps } from '../../../@types';
import { ProductPrice } from '../../../components';

import styles from '../../../styles/pages/Product.module.css';
import { api } from '../../../utils/api';


export default function ProductDetails(props: ProductProps) {
    const { name, description, price, imgUrl } = props.productDetails;

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
                                src={imgUrl}
                                width='350'
                                height='350'
                                alt={name}
                                className={styles.productDetailsImage}
                            />
                        </div>

                        <div className={`d-md-flex justify-content-md-between flex-md-row flex-lg-column`}>
                            <h1 className={styles.productDetailsName}>
                                {name}
                            </h1>
                            <ProductPrice price={String(price)} />
                        </div>
                    </div>

                    <div className={`col-xl-6 ${styles.productDetailsCard}`}>
                        <h1 className={styles.productDescriptionTitle}>
                            Descrição do produto:
                        </h1>
                        <p className={styles.productDescriptionText}>
                            {description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { product: id } = context.query;
    const response = await api.get(`/products/${id}`);
    const productDetails = response.data;

    return {
        props: {
            productDetails: productDetails,
        }
    };
}