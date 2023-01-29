import Post from "@/Components/Post/Post";

const Posts = ({ posts }) => {
    console.log(posts);
    return (
        <div>
            <h2 className="text-2xl">This number of Posts {posts.length}</h2>
            {
                posts?.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}