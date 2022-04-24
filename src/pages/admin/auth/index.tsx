import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { ButtonWithIcon } from '../../../components';
import backgroundImg from '../../../../public/auth-page-image.png';

import styles from '../../../styles/pages/AuthPage.module.css';
import { AuthData } from '../../../@types';
import { loginUser } from '../../../utils/auth';
import { useState } from 'react';


export default function AuthPage() {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = (data: AuthData) => {
        setIsLoading(true);
        let { username, password } = data;

        if (username && password) {
            loginUser(username, password)
                .then((response) => {
                    response.access_token && router.reload();
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => setIsLoading(false));
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={`d-none d-lg-block ${styles.authInfo}`}>
                <h1 className={styles.authInfoTitle}>
                    Divulgue seus produtos <br /> no DS Catalog
                </h1>
                <p className={styles.authInfoSubtitle}>
                    Faça parte do nosso catálogo de divulgação e<br /> aumente a venda dos seus produtos.
                </p>
                <Image
                    src={backgroundImg}
                    alt='Background Login'
                />
            </div>
            <div className={`card-base ${styles.authCard}`}>
                <div className={styles.authContent}>
                    <>
                        <form
                            className={`d-flex flex-column align-items-center justify-content-between ${styles.loginForm}`}
                            onSubmit={handleSubmit(onSubmit)}>
                            <h2 className={`text-center mb-5 ${styles.formTitle}`}>Login</h2>
                            <input
                                type='text'
                                className={`form-control input-base`}
                                placeholder='Email'
                                {
                                ...register('username', {
                                    required: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })
                                }
                            />
                            {
                                errors.username?.type === 'required' && (
                                    <p className='login-form-error'>
                                        O preenchimento do email é obrigatório
                                    </p>
                                )
                            }
                            {
                                errors.username?.type === 'pattern' && (
                                    <p className='login-form-error'>
                                        Insira um email válido
                                    </p>
                                )
                            }
                            <input
                                type='password'
                                className={`form-control input-base`}
                                placeholder="Senha"
                                {
                                ...register('password', {
                                    required: true,
                                })
                                }
                            />
                            {
                                errors.password?.type === 'required' && (
                                    <p className='login-form-error'>
                                        O preenchimento da senha é obrigatório
                                    </p>
                                )
                            }
                            <Link href='/'>
                                <a className={styles.passwordRecovery}>
                                    Esqueci minha senha
                                </a>
                            </Link>
                            <div className={`d-flex align-items-center justify-content-center ${styles.loginSubmit}`}>
                                <ButtonWithIcon
                                    disabled={isLoading}
                                    label='login'
                                    type='submit' />
                            </div>
                            <div className={`text-center`}>
                                <span className={styles.notRegistered}>
                                    Não possui cadastro?
                                </span>
                                <Link href='/'>
                                    <a className={styles.signUpButton}>
                                        CADASTRAR
                                    </a>
                                </Link>
                            </div>
                        </form>
                    </>
                </div>
            </div>
        </div>
    );
}