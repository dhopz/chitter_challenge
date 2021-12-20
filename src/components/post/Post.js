import React from 'react'
import styles from './Post.module.scss'

const post = ({content,date}) => {
    return (
        <>
        <p className={styles.postsContent}>
            { content } 
        </p>
        <p className={styles.postsDate}>
            { date }
        </p>
        </>
    )
}

export default post
  