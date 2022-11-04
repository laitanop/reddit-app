import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import ContainerPost from './containerPost';
import CreatePost from './createPost';
import { supabase } from '../../services/supabaseclient';

type Props = {};

const Feed = (props: Props) => {
    const [myPosts, setMyPosts] = useState<string[]>([]);
    const [error, setError] = useState('');

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
            <CreatePost />
            {myPosts.map((item) => (
                <ContainerPost postList={item} key={item.id} />
            ))}
        </div>
    );
};

export default Feed;
