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
import Dashboard from './pages/Dashboard/Dashboard'
import Landing from './pages/Dashboard/Landing/Landing'
import Analytics from './pages/Dashboard/Analytics/Analytics'
import Reports from './pages/Dashboard/Reports/Reports'
import Users from './pages/Dashboard/Users/Users'
import Settings from './pages/Dashboard/Settings/Settings'
import Notifications from './pages/Dashboard/Notifications/Notifications'
import Messages from './pages/Dashboard/Messages/Messages'
import Tasks from './pages/Dashboard/Tasks/Tasks'
import Profile from './pages/Dashboard/Profile/Profile'
import Help from './pages/Dashboard/Help/Help'
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
        
        <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='' element={<Landing/>}/>
            <Route path='Analytics' element={<Analytics/>}/>
            <Route path='Reports' element={<Reports/>}/>
            <Route path='Users' element={<Users/>}/>
            <Route path='Settings' element={<Settings/>}/>
            <Route path='Notifications' element={<Notifications/>}/>
            <Route path='Messages' element={<Messages/>}/>
            <Route path='Tasks' element={<Tasks/>}/>
            <Route path='Profile' element={<Profile/>}/>
            <Route path='Help' element={<Help/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App