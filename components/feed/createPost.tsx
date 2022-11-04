import React from 'react';
import styles from '../../styles/feed.module.css';
import Box from '@mui/material/Box';
import { CreatePostIcon } from '../../assets/CreatePostIcon';
type Props = {};

const CreatePost = (props: Props) => {
    return (
        <Box className={styles.create_container}>
            <CreatePostIcon />
            <input
                name="createPost"
                className={styles.input_create}
                placeholder="Create Post"
                type="text"
            ></input>
        </Box>
    );
};

export default CreatePost;
