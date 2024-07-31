import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

async function fetchPost(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await response.json()
}

const PostDetails = () => {

    const [post,setPost] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function fetchData(){
            const post = await fetchPost(id);
            console.log(post);
            setPost(post)
        }
        fetchData()
    })

    // const {data,isLoading} = useQuery("post", fetchPost(id), {
    //     refetchOnWindowFocus:false,
    // })

    // if(isLoading) return <p>Está carregando...</p>

    return (
        <>
            <section className="post-details">
                <h1>{post.id} - {post.title}</h1>
                <p>{post.body}</p>
            </section>
        </>
    )
}

export { PostDetails }