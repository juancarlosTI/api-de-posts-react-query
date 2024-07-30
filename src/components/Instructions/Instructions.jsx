import './instructions.css'

export const Instructions = () => {
    return (
        <>
            <section className="instructions">
                <div>
                    <h2>Instruções para utilização:</h2>
                    <ul>
                        <li> - Será realizada ao lado a listagem de posts de uma API. Cada post exibirá somente seu título, que será um link que redirecionará a página para a página detalhada do post individualmente.</li>
                        <li> - Abaixo desse componente, haverá uma caixa de inputs, que deverá adicionar novos posts a listagem de posts. </li>
                        <li> - Ao adicionar o post, a listagem de posts deverá atualizar utilizando o método useMutation da biblioteca React-Query.</li>
                        <li> - Para realizar o roteamento de páginas, deverá ser utilizado o React Router Dom.</li>
                        <li> - O React-Query só deverá ser utilizado no componente da listagem de posts.</li>

                        <p>Enjoy!</p>

                    </ul>
                </div>
            </section>
        </>
    )
}