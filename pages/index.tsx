import type { NextPage } from 'next';
import Header from '../components/header';
import styles from '../styles/home.module.css';
// import Banner from '../components/community/Banner';
// import CreatePost from '../components/feed/CreatePost';
// import About from '../components/community/About';

const style = {
    wrapper: `flex min-h-screen flex-col bg-black text-white`,
    main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
    content: `w-full space-y-4 lg:w-2/3`,
    infoContainer: `hidden w-1/3 lg:block`,
};

const Home: NextPage = () => {
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={styles.banner}>Banner</div>

            <main className={style.main}>
                <div className={style.content}>post</div>
                <div className={style.infoContainer}>about</div>
            </main>
        </div>
    );
};

export default Home;
