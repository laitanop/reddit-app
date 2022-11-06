import React from 'react';

import styles from '../../styles/Home.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Feed from '../feed/feed';
import About from '../about/about';
type Props = {
    children: any;
};

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <Box className={styles.box_container}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={8} lg={8}>
                        <Box className={styles.feed_container}>{children}</Box>
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

export default Layout;
