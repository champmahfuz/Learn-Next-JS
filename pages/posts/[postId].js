import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';


const PostDetails = ({ post }) => {
    const router = useRouter();
    const handleBack = () => {
        router.push('/posts')
    }
    return (
        <div className="card my-10 bg-base-100 shadow-xl image-full">
            <div className="card-body">
                <p>PostId: {post?.id}</p>
                <h2 className="card-title">Title: {post.title}</h2>
                <p>Post: {post?.body}</p>

                <button onClick={handleBack} className="btn btn-primary">Back</button>

            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default PostDetails;