import { useState } from "react"
import './addPost.css'
import { useForm } from "react-hook-form"

export const AddPost = (props) => {
    const {register,handleSubmit, formState: {errors}} = useForm();

    const handleSubmitForm = (data) => {
        console.log(data)
        data.preventDefault()
        props.addPost(data)
    }

    // PARA TERMINAR: FAZER PAGINAÇÃO PARA PAGINA DETALHADA DO POST

    
    return (
        <>
            <section className="add-post">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div>
                        <label htmlFor="title-post">
                            Título do post: 
                        </label>
                        <input 
                        type="text" 
                        id="title-post"
                        className={`campo ${errors.titulo ? "campo-obrigatorio":"campo preenchido"}`}
                        {
                            ...register('titulo', {
                                required: "Campo obrigatório"
                            })
                        }></input>
                        {errors.titulo && <p className="error-message">{errors.titulo.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="description-post">
                            Descrição do post: 
                        </label>
                        <input 
                        type="text" 
                        id="description-post"
                        className={`campo ${errors.descricao ? "campo-obrigatorio":"campo preenchido"}`}
                        {
                            ...register('descricao', {
                                required: "Campo obrigatório"
                            })
                        }></input>
                        {errors.descricao && <p className="error-message">{errors.descricao.message}</p>}
                    </div>
                    <input type="submit"/>
                </form>
            </section>
        </>
    )
}