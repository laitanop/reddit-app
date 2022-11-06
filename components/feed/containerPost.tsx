import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../../styles/feed.module.css';

type Props = {
    postList: any;
    key: number;
};

const ContainerPost = ({ postList, key }: Props) => {
    return (
        <Box className={styles.post_container}>
            <Typography variant="body2" component="h2">
                &bull; Posted by {postList.author}
            </Typography>

            <br />
            <Typography variant="h6" component="h2">
                {postList.title}
            </Typography>

            <br />
            <Typography variant="body2" component="h2">
                {postList.content}
            </Typography>
        </Box>
    );
};

export default ContainerPost;
