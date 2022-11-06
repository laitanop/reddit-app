import React from 'react';
import Box from '@mui/material/Box';
import styles from '../../styles/submit.module.css';

type Props = {};

const SubmitContainer = (props: Props) => {
    return (
        <div>
            <Box className={styles.submit_title}>Create a post</Box>
            <Box className={styles.submit_container}>
                <input
                    name="createPost"
                    className={styles.input_title}
                    placeholder="Title"
                    type="text"
                ></input>
                <br />
                <textarea
                    className={styles.input_text}
                    placeholder="Text (optional)"
                    rows={8}
                    cols={50}
                ></textarea>
            </Box>
        </div>
    );
};

export default SubmitContainer;
