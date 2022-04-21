import { ButtonWithIconProps } from '../../@types';
import Image from 'next/image';
import arrow from '../../../public/arrow.svg';

import styles from './ButtonWithIcon.module.css';


export default function ButtonWithIcon({ label, type }: ButtonWithIconProps) {
    return (
        <div className={`d-flex ${styles.buttonContainer}`}>
            <button
                className={`btn btn-primary ${styles.btnIcon}`}
                type={type}
            >
                <h5>{label}</h5>
            </button>
            <div className={styles.btnIconContent}>
                <Image src={arrow} alt='Arrow' />
            </div>
        </div>
    );
}