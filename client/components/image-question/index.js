import styles from './imagequestion.module.css'
const ImageQuestion = ({ base64String, altText = 'Image' }) => {

    return (
        <div className={styles.imagecontainer}>
            <img src={base64String} altText={altText} className={styles.base64image}></img>
        </div>
    )
}
export default ImageQuestion