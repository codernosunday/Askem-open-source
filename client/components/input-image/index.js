import { useState } from 'react';
import styles from './inputimage.module.css'
const InputImage = ({ imageBase64, setImageBase64 }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const base64String = e.target.result;
                setImageBase64(base64String);
                setImagePreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.container}>
            <label htmlFor="imgInput" className={styles.uploadBox}>
                <span className={styles.uploadLabel}>Upload an image</span>
            </label>
            <input id='imgInput' type="file" accept="image/*" onChange={handleImageUpload} />
            {imagePreview && <img className={styles.previewImage} src={imagePreview} alt="Image Preview" style={{ maxWidth: '300px' }} />}
        </div>
    );
};

export default InputImage;
