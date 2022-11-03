import type { NextPage } from 'next';
import Header from '../components/header';
import styles from '../styles/home.module.css';
// import Banner from '../components/community/Banner';
// import CreatePost from '../components/feed/CreatePost';
// import About from '../components/community/About';

const Home: NextPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.banner}>Banner</div>

            <main className={styles.main}>
                <div className={styles.content}>post</div>
                <div className={styles.infoContainer}>about</div>
            </main>
        </div>
    );
};

export default Home;
