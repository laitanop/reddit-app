import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import ContainerPost from './containerPost';
import CreatePost from './createPost';
import { supabase } from '../../services/supabaseclient';

type Props = {};

const Feed = (props: Props) => {
    const [myPosts, setMyPosts] = useState<any[]>([]);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleCreatePost = async () => {
        const { error } = await supabase.from('feed').insert({
            author: 'Denmark',
            title: title,
            content: content,
        });
    };

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const handleChangeContent = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setContent(event.target.value);
    };
    useEffect(() => {
        const fetchFeed = async () => {
            const { data, error } = await supabase.from('feed').select();
            if (error) {
                console.log('error', error);
                setError(error.message);
            }
            if (data) {
                setMyPosts(data);
            }
        };

        fetchFeed();
    }, []);

    return (
        <div>
            <CreatePost
                handleChangeTitle={handleChangeTitle}
                handleChangeContent={handleChangeContent}
            />
            {myPosts.map((item) => (
                <ContainerPost postList={item} key={item.id} />
            ))}
        </div>
    );
};

export default Feed;
