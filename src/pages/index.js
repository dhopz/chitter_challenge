import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Post from '../components/post/post'
import Bio from '../components/Bio/Bio'
import Header from '../components/Header/Header'


export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
      
      <Bio
        headshot="https://pbs.twimg.com/profile_images/464741577923915776/MqkSoHaF_400x400.jpeg"
        name="Person Name"
        tagline="Learning how to make things!"
        role="Student@Makers"
      />

        <ul className={styles.posts}>
          <li>
            <Post 
            content="hello testing here.." 
            date="26/12/2021">
            </Post>
          </li>
          <li>
            <Post 
            content="This is a chitter challenge and the need to put lots of text here to see the container." 
            date="26/12/2021">
            </Post>            
          </li>
          <li>
            <Post 
            content="This is a chitter challenge!"
            date="20/12/2021">
            </Post>
          </li>
          <li>
            <Post 
            content="This is a chitter challenge!"
            date="20/12/2021">            
            </Post>
          </li>
        </ul>

        <form>
          <textarea className={styles.formContent}></textarea>
            <button className={styles.formButton}>
              Add New Post
            </button>          
        </form>

      </main>

      
    </div>
  )
}
