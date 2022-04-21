import type { NextPage } from 'next';
import Link from 'next/link';
import { ButtonWithIcon } from '../components';
import Image from 'next/image';
import homeImage from '../../public/home-image.svg';

import styles from '../styles/pages/Home.module.css';


const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>

      <div className={`row d-flex flex-column-reverse align-items-center justify-content-center flex-lg-row card-base border-radius-20 ${styles.homeContent}`}>

        <div className={`col-lg-6 d-flex flex-column align-items-center mt-4 mt-md-0 ${styles.homeText}`}>

          <h1 className={styles.textTitle}>
            Conheça o melhor catálogo de produtos
          </h1>
          <p className={styles.textSubtitle}>
            Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.
          </p>
          <Link href='/catalog'>
            <a>
              <ButtonWithIcon
                label='Inicie agora a sua busca'
                type={`button`}
              />
            </a>
          </Link>
        </div>

        <div className={`col-lg-6 d-flex align-items-center justify-content-center align-items-lg-center justify-content-lg-start ${styles.homeImgContainer}`}>
          <Image src={homeImage} alt='Home Page Image'></Image>
        </div>

      </div>

    </div>
  );
};


export default Home;
