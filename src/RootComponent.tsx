import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppBarPage from './pages/App/AppBar'
import Bag from './pages/Bag/Bag' 
import FavoriteList from './pages/FavoriteList/FavoriteList'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Products from './pages/ProductsList/Products'
import { ROUTES } from './resources/routes-constants'
// import './styles/main.sass'
import './styles/try.modules.scss'


const RootComponent: React.FC = () => {
    return (
        <Router>
             <AppBarPage />
             
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> 
                <Route path={ROUTES.PRODUCT_LIST} element={<Products />} /> 
                <Route path={ROUTES.FAVORITE_LIST} element={<FavoriteList />} /> 
                <Route path={ROUTES.CART_LIST} element={<Bag />} /> 
            </Routes>
           
        </Router>
    )
}

export default RootComponent
