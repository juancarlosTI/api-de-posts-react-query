import { useMutation, useQuery } from "react-query";
import './exibition.css'
import { AddPost } from "../Post/addPost";
import { Link } from "react-router-dom";

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json();
}

export const PostsList = (props) => {
    return (
        <ul>
            {
                props.posts.map((post) => {
                    return (
                        <>
                            {/* <Link to={post.id}> */}
                                <li key={post.id}>
                                    <h5>{post.id} - Título: {post.title}</h5>
                                    {/* <p>Descrição: {post.body}</p> */}
                                </li>
                            {/* </Link> */}
                        </>
                    )
                })
            }
        </ul>
    )
}

export const Exibition = () => {

    const { data, isLoading } = useQuery("post", fetchPosts, {
        refetchOnWindowFocus: false
    })

    if (isLoading) return <p>Está carregando...</p>
    console.log(data);

    const addPost = (newPost) => {
        const post_data = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {

                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newPost)
                });

                if (!response.ok) {
                    throw new Error('Erro desconhecido. Não foi executado o POST')
                }

                console.log(response)
                return await response.json()
            } catch (error) {
                console.error("Erro sending post: ", error)
            }
        }
        post_data()

    }

    return (
        <>
            <section className="post-list">
                {
                    data.length > 0 ? <PostsList posts={data} /> : "Nenhum post a ser exibido"
                }
            </section>
            <AddPost addPost={addPost} />
        </>
    )
}