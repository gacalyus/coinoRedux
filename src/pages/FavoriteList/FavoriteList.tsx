import React, { useState, useEffect } from 'react'
import Priority from '../CustomComponent/Priority'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from '../../storeToolkit'
import Grid from '@mui/material/Grid'
import { removeFavorite } from '../../features/slice'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'

const FavoriteList = () => {
    const dispatch = useAppDispatch()
    const [productItems, setProductItem] = useState<any>([])
    const product = useAppSelector((state) => state.product)

    useEffect(() => {
        const newProduct = product.filter((todo) => todo.favorite == true)
        setProductItem(newProduct)
    }, [product])

    return (
        <div className="divCartList">
            <Grid container spacing={1} p={4} style={{ overflow: 'hidden', maxWidth: '1080px ' }}>
                {productItems.map((item: any) => (
                    <Grid item xs={12} md={3} lg={12 / 5} key={item.id}>
                        <div className="cartDiv">
                            <div className="cartHeader">
                                <div className="cartHeader-left">
                                    <Priority colorPriority={item.priority === 1 ? 'red' : false} />
                                </div>
                                <div className="cartHeader-right">
                                    <Button
                                        onClick={() => {
                                            dispatch(removeFavorite(item.id))
                                        }}
                                        color="secondary"
                                    >
                                        <FavoriteOutlinedIcon className="cartTitle" />
                                    </Button>
                                </div>
                            </div>
                            <div className="cartBody">
                                <img src="https://www.realhomes.com.tr/wp-content/uploads/2020/01/realhomesMasa3316.jpg" alt="Trees" />
                            </div>
                            <div className="cartFooter">
                                <span className="cartTitle">{item.product_name} </span>
                                <span className="cartTitle">Fiyat: {item.price} </span>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default FavoriteList
