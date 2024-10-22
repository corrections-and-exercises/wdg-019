import useFetch from '../hooks/useFetch.js';
export default function Posts() {
    const {
        error,
        loading,
        data: posts,
    } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error</p>;
    return (
        <div>
            <h2>Posts</h2>
            {posts?.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

function Post({post}) {
    return <p>{post.id}</p>;
}
