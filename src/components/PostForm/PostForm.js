import React from 'react'
import styles from './PostForm.module.scss'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const PostForm = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'posts'), {
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
    return (
        <form>
          <textarea className={styles.formContent}></textarea>
            <button className={styles.formButton} onClick={handleSubmit}>
              Add New Post
            </button>          
        </form>
    )
}

export default PostForm
