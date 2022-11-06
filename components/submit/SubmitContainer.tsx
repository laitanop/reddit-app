import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styles from '../../styles/submit.module.css';
import { supabase } from '../../services/supabaseclient';
import { useRouter } from 'next/router';
type Props = {};

const SubmitContainer = (props: Props) => {
    const router = useRouter();
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleCreatePost = async () => {
        const { error } = await supabase.from('feed').insert({
            author: 'Denmark',
            title: title,
            content: content,
        });
        if (!error) {
            router.push('/');
        }
    };

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const handleChangeContent = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setContent(event.target.value);
    };
    return (
        <div>
            <Box className={styles.submit_title}>Create a post</Box>
            <Box className={styles.submit_container}>
                <input
                    onChange={(e) => handleChangeTitle(e)}
                    name="createPost"
                    className={styles.input_title}
                    placeholder="Title"
                    type="text"
                ></input>
                <br />
                <textarea
                    onChange={(e) => handleChangeContent(e)}
                    className={styles.input_text}
                    placeholder="Text (optional)"
                    rows={8}
                    cols={50}
                ></textarea>
                <button onClick={() => handleCreatePost()}>Post</button>
            </Box>
        </div>
    );
};

export default SubmitContainer;
