import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './textareaupdate.module.css'
const RichTextEditor = dynamic(() => import('./richtexteditor'), {
    ssr: false,
})
const TextAreaUpdate = ({
    label,
    inputInfo,
    hasError,
    errorMessage,
    value,
    setValue
}) => {
    return (
        <div className={styles.container}>
            {label && <label className={styles.label}>{label}</label>}
            {inputInfo && <p className={styles.inputInfo}>{inputInfo}</p>}
            <RichTextEditor value={value} setValue={setValue}></RichTextEditor>
            {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div >
    )
}

export default TextAreaUpdate
