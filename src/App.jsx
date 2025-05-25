import React from 'react'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import Recipe from './pages/Recipe/Recipe'
import Post from './pages/Post/Post'
import Login from './pages/Login/Login'
import Layout from './pages/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/not-found/NotFound'
import ProductDetail from './pages/product-detail/ProductDetail'
import RecipeDetail from './pages/recipe-Detail/RecipeDetail'
import UserDetail from './pages/user-detail/UserDetail'
import PostsDetail from './pages/posts-deatil/PostsDetail'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/Recipe' element={<Recipe />} />
          <Route path='/Post' element={<Post />} />
          <Route path='/product/:id' element={<ProductDetail/>} />
          <Route path='/recipe/:id' element={<RecipeDetail/>} />
          <Route path='/user/:id' element={<UserDetail/>} />
         <Route path='/post/:id' element={<PostsDetail/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App