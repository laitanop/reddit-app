import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/feed.module.css';
import Box from '@mui/material/Box';
import { CreatePostIcon } from '../../assets/CreatePostIcon';

type Props = {
    handleChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeContent: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CreatePost = ({ handleChangeTitle, handleChangeContent }: Props) => {
    const router = useRouter();
    return (
        <Box className={styles.create_container}>
            <CreatePostIcon />

            <input
                onFocus={() => router.push('/submit')}
                name="createPost"
                className={styles.input_create}
                placeholder="Create Post"
                type="text"
            ></input>
        </Box>
    );
};

export default CreatePost;
