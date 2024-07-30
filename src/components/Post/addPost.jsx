import { useState } from "react"
import './addPost.css'

export const AddPost = (props) => {
    // const data = async () => { await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newPost),
    // })};

    const [inputs, setInputs] = useState({
        title: '',
        description:''
    })

    const handleInputChange = (event) => {
        console.log(event.target.name)
        const { target } = event
        const { name } = target
        const { value } = target

        setInputs({
            title: value,
            description:value
        })
    }

    const handleSubmit = (event) => {
        //console.log(event)
        event.preventDefault()
        props.addPost(inputs)
    }


    return (
        <>
            <section className="add-post" onSubmit={handleSubmit}>
                <form>
                    <div>
                        <label htmlFor="title-post">
                            Título do post: 
                        </label>
                        <input type="text" id="title-post" name="title-post" onChange={handleInputChange} value={inputs.title}></input>
                    </div>
                    <div>
                        <label htmlFor="description-post">
                            Descrição do post: 
                        </label>
                        <input type="text" id="description-post" name="description-post" onChange={handleInputChange} value={inputs.description}></input>
                    </div>
                    <input type="submit"/>
                </form>
            </section>
        </>
    )
}