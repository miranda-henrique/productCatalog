import { useEffect, useState } from 'react';
import { Category, ProductItemPropsEditForm } from '../../@types';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { api } from '../../utils/api';
import Link from 'next/link';

import styles from './CreateForm.module.css';
import ImageUpload from '../ImageUpload';
import { GetStorageItem } from '../../utils/getStorageItem';


export default function CreateForm() {
    const [availableCategories, setAvailableCategories] = useState<Category[]>();
    const [uploadedImgUrl, setUploadedImgUrl] = useState('');
    const [productImgUrl, setProductImgUrl] = useState('');

    const { register, handleSubmit, formState: { errors }, control } = useForm();

    const onSubmit = async (form: ProductItemPropsEditForm) => {
        const data = {
            ...form,
        };

        let localToken: string = '';
        if (typeof window !== 'undefined') {
            localToken = String(localStorage.getItem('@dscatalog/item'));
        }

        await api({
            url: `/products`,
            method: 'POST',
            data: data,
            headers: {
                Authorization: `Bearer ${JSON.parse(localToken) ?? ''}`,
            }
        });

        history.pushState(null, 'Admin', '/admin');
        history.go(0);
    };

    const loadCategories = async () => {
        const response = await api({ url: '/categories' });
        setAvailableCategories(response.data.content);
    };

    const onUploadSuccess = (imgUrl: string) => {
        setUploadedImgUrl(imgUrl);
    };

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`card-base border-radius-20 ${styles.form}`}
        >
            <div className={`d-flex flex-column flex-md-row`}>
                <div className={`col-md-6 p-2 d-flex flex-column gap-4`}>
                    <h4>Dados do Produto</h4>
                    <input
                        type='text'
                        {...register('name', { required: true })}
                        placeholder='Nome do produto'
                        className={`form-control ${errors.name && styles.error}`}
                    />
                    {
                        errors.name && (
                            <span className={styles.errorMsg}>
                                Adicione um nome ao produto
                            </span>
                        )
                    }
                    <Controller
                        control={control}
                        name='categories'
                        render={
                            ({ field }) => (
                                <Select
                                    {...field}
                                    options={availableCategories}
                                    getOptionLabel={(category: Category) => category.name}
                                    getOptionValue={(category: Category) => String(category.id)}
                                    isMulti
                                />
                            )
                        }
                    />
                    <input
                        type='text'
                        {...register('price')}
                        placeholder='Pre??o R$'
                        className={`form-control`}
                    />
                    {/* <ImageUpload
                        onUploadSuccess={onUploadSuccess}
                        productImgUrl={productImgUrl}
                    /> */}
                </div>
                <div className={`col-md-6 p-2`}>
                    <textarea
                        {...register('description')}
                        placeholder='Descri????o'
                        rows={10}
                        className={styles.textArea}
                    ></textarea>
                </div>
            </div>
            <div className={`d-flex flex-row ${styles.buttonContainer}`}>
                <Link href='/admin' passHref>
                    <button type='button' className={styles.btnCancel}>
                        Cancelar
                    </button>
                </Link>
                <button type='submit' className={styles.btnSubmit}>
                    Salvar
                </button>
            </div>
        </form>
    );
};