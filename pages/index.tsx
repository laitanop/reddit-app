import type { NextPage } from 'next';
import Header from '../components/header';
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import Feed from '../components/feed/feed';
import About from '../components/about/about';
const Home: NextPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Box className={styles.box_container}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={8} lg={8}>
                        <Box className={styles.feed_container}>
                            <Feed />
                        </Box>
                    </Grid>
                    <Grid md={4} lg={4}>
                        <Box
                            className={styles.about_container}
                            display={{ xs: 'none', lg: 'block' }}
                        >
                            {' '}
                            <About />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Home;
