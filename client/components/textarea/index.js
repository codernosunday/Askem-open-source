import React, { useState } from 'react'
// import dynamic from 'next/dynamic'
import cn from 'classnames'
import styles from './textarea.module.css'
// const RichTextEditor = dynamic(() => import('../text-area-update'), {
//   ssr: false, // Tắt SSR
// })
const TextArea = ({
  label,
  inputInfo,
  hasError,
  errorMessage,
  className,
  // value,
  // setValue,
  ...props
}) => {
  const [editorContent, setEditorContent] = useState('');
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      {inputInfo && <p className={styles.inputInfo}>{inputInfo}</p>}
      <textarea
        className={cn(styles.textarea, className, hasError && styles.hasError)}
        {...props}
      />
      {/* <RichTextEditor value={value} setValue={setValue}></RichTextEditor> */}
      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div >
  )
}

export default TextArea
