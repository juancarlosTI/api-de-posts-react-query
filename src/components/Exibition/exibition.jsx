import { useMutation, useQuery } from "react-query";
import './exibition.css'
import { useState } from "react";
import { AddPost } from "../Post/addPost";

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json();
}

const PostsList = (props) => {
    return (
        <ul>
            {
                props.posts.map((post) => {
                    return (

                        <li key={post.id}>
                            <h5>{post.id} - Título: {post.title}</h5>
                            {/* <p>Descrição: {post.body}</p> */}
                        </li>

                    )
                })
            }
        </ul>
    )
}

export const Exibition = () => {
    const mutation = useMutation({
        mutationFn: async (newPost) => { await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })},
      })
    const [newPost,setNewPost] = useState({

    })

    const { data, isLoading } = useQuery("post", fetchPosts, {
        refetchOnWindowFocus: false
    })

    if (isLoading) return <p>Está carregando...</p>
    console.log(data)

    const addPost = (newPost) => {
        console.log(newPost)
        //A mutação vai aqui. O novo post será postado na variável data.
        // { await fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newPost),
        // })}
    }

    return (
        <>
            <section  className="post-list">
                {
                    data.length > 0 ? <PostsList posts={data} /> : "Nenhum post a ser exibido"
                }
            </section>
            <AddPost addPost={addPost}/>
        </>
    )
}