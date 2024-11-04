import React from 'react'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './groupitems.module.css'

const GroupItem = ({ name, avatar, created }) => {
    return (
        <div className={styles.card}>
            <div className={styles.avatar}>
                <Link href="/groups/[group]" as={`/groups/${name}`}>
                    <a>
                        <img src={avatar} alt={name} />
                    </a>
                </Link>
            </div>
            <div className={styles.body}>
                <Link href="/groups/[group]" as={`/groups/${name}`}>
                    <a>{name}</a>
                </Link>
                <p>
                    created{' '}
                    {formatDistanceToNowStrict(new Date(created), {
                        addSuffix: true
                    })}
                </p>
            </div>
        </div>
    )
}
export default GroupItem 
