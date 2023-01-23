import React, { useState, useEffect } from 'react'
import CartList from '../Cart/CartList'
import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { useAppSelector } from '../../storeToolkit'

const Products = () => {
    const product = useAppSelector((state) => state.product)
    const [productFilter, setProductFilter] = useState<any>([])

    const handleChange = (e: any) => {
        const value = e.target.value
        const filterValue = value.toLowerCase()

        let newList = [...product]

        newList = product.filter((item: any) => {
            return item.product_name.toLowerCase().indexOf(filterValue) !== -1
        })
        setProductFilter(e.target.value === '' ? product : newList)
    }

    useEffect(() => {
        setProductFilter(product)
    }, [product])
    const handleSubmit = () => {}
    return (
        <div>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div className="divCartList">
                    <Grid container spacing={1} p={4} style={{ overflow: 'hidden', maxWidth: '1080px ' }}>
                        <Grid item xs={12} md={8}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Search Product"
                                multiline
                                maxRows={4}
                                fullWidth
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
            </form>
            <div className="divCartList">
                <CartList productFilter={productFilter} />
            </div>
        </div>
    )
}

export default Products
