import { } from 'react'
import { Instructions } from './components/Instructions/Instructions'
import { createGlobalStyle } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Exibition } from './components/Exibition/exibition'
import { AddPost } from './components/Post/addPost'


function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='container'>
          <GlobalStyle />
          <Instructions />
          <Exibition />
        </div>
      </QueryClientProvider>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    }
  
  body {
    background-color: #66FF66;
    justify-content: center;
  }

  .container{
    display: grid;
    grid:
    "instructions posts-list"
    "add-post .";
  }
    
`

export default App
