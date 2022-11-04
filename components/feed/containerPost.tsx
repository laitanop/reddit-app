import React from 'react';
import Box from '@mui/material/Box';
import styles from '../../styles/feed.module.css';

type Props = {
    postList: any;
    key: number;
};

const ContainerPost = ({ postList, key }: Props) => {
    console.log('postList', postList);
    return (
        <Box className={styles.post_container}>
            {postList.author}
            {postList.title}
            {postList.content}
        </Box>
    );
};

export default ContainerPost;
