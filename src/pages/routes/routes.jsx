import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "../posts/posts";
import { Post } from "../post/post";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/home' element={<Posts/>}/>
                <Route exact path='/post/:id' element={<Post/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }