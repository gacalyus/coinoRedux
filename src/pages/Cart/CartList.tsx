import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Priority from '../CustomComponent/Priority'
import Button from '@mui/material/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { useAppDispatch, useAppSelector } from '../../storeToolkit'
import { addFavorite, add, addBag } from '../../features/slice'
import axios from 'axios'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const CartList = (productFilter: any) => {
    const product = useAppSelector((state) => state.product)
    const [productItems, setProductItem] = useState<any>([])
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (product && product.length < 1) {
            axios
                .get('data.json')
                .then((res) => dispatch(add(res.data)))
                .catch((err) => console.log(err))
        }
    }, [])
 
    useEffect(() => {
        setProductItem(product)
    }, [product])

    return (
        <Grid container spacing={1} p={4} style={{ overflow: 'hidden', maxWidth: '1080px ' }}>
            {productFilter.productFilter &&
                productFilter.productFilter.map((item: any) => (
                    <Grid item xs={12} md={3} lg={12 / 5} key={item.id}>
                        <div className="cartDiv">
                            <div className="cartHeader">
                                <div className="cartHeader-left" style={{ marginTop: '5px' }}>
                                    <Priority colorPriority={item.priority === 1 ? 'red' : false} />
                                </div>
                                <div className="cartHeader-right">
                                    <Button
                                        onClick={() => {
                                            dispatch(addFavorite(item.id))
                                        }}
                                        color="secondary"
                                    >
                                        {item.favorite ? <FavoriteOutlinedIcon className="cartTitle" /> : <FavoriteBorderIcon className="cartTitle" />}
                                    </Button>
                                </div>
                            </div>
                            <div className="cartBody">
                                <img src="https://www.realhomes.com.tr/wp-content/uploads/2020/01/realhomesMasa3316.jpg" alt="Trees" />
                            </div>
                            <div className="cartFooter">
                                <span className="cartTitle">{item.product_name} </span>
                                <span className="cartTitle">Fiyat: {item.price} </span>
                                <Button
                                    onClick={() => {
                                        dispatch(addBag(item))
                                    }}
                                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                                    color="secondary"
                                >
                                    <ShoppingCartIcon />
                                </Button>
                            </div>
                        </div>
                    </Grid>
                ))}
        </Grid>
    )
}

export default CartList
