import React, { useState } from 'react';
import uploadImagePlaceholder from '../../../public/upload-image.png';
import { api } from '../../utils/api';

import styles from './ImageUpload.module.css';

type Props = {
    onUploadSuccess: (imgUrl: string) => void;
    productImgUrl: string,
};


export default function ImageUpload({ productImgUrl }: Props) {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedImgUrl, setUploadedImgUrl] = useState('');

    const imgUrl = uploadedImgUrl || productImgUrl;

    const onUploadProgress = (progressEvent: ProgressEvent) => {
        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);

        setUploadProgress(progress);
    };

    const uploadImage = (selectedImage: File) => {
        const payload = new FormData();
        payload.append('file', selectedImage);

        let localToken: string = '';
        if (typeof window !== 'undefined') {
            localToken = String(localStorage.getItem('@dscatalog/item'));
        }

        api({
            url: '/products/image',
            method: 'POST',
            data: payload,
            onUploadProgress,
            headers: {
                Authorization: `Bearer ${localToken}`,
            }
        })
            .then((response) => {
                setUploadedImgUrl(response.data.uri);
                onUploadProgress(response.data.uri);
            })
            .catch(() => {
                console.error('Image upload error');
            })
            .finally(() => setUploadProgress(0));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files?.[0];

        if (selectedImage) {
            uploadImage(selectedImage);
        }
    };

    return (
        <div className={`row`}>
            <div className={`col-6`}>
                <div className={styles.uploadButtonContainer}>
                    <input
                        type='file'
                        id='upload'
                        accept='image/png, image/jpeg'
                        onChange={handleChange}
                        hidden
                    />
                    <label htmlFor='upload'>
                        ADICIONAR IMAGEM
                    </label>
                </div>
                <small className={styles.uploadTextHelper}>
                    A imagem deve ser JPG ou PNG e<br /> não deve ultrapassar <strong>5mb.</strong>
                </small>
            </div>
            <div className={`col-6`}>
                {
                    uploadProgress > 0 && (
                        <>
                            <img src={uploadImagePlaceholder.src} alt='Upload' />
                            <div className={styles.uploadProgressContainer}>
                                <div
                                    className={styles.uploadProgress}
                                    style={{ width: `${uploadProgress}` }}
                                >

                                </div>
                            </div>
                        </>
                    )
                }
                {
                    imgUrl && uploadProgress === 0 && (
                        <img
                            src={imgUrl}
                            alt={imgUrl}
                            className={styles.uploadedImage}
                        />
                    )
                }
            </div>
        </div>
    );
}