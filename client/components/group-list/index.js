import React from 'react'

import styles from './group-list.module.css'

const GroupList = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}

export default GroupList
