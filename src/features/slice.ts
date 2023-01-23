
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    product_name: string | null;
    priority: number;
    favorite: boolean;
    price: number;
    bag_count: number;
    total_price: number;
}

const initialState: Product[] = [];

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<any>) => {

            state = action.payload;
            return state;
        },
        addFavorite: (state, action: PayloadAction<any>) => {

            return state.map((item) =>
                item.id === action.payload ?
                    { ...item, favorite: !action.payload.favorite } : item
            )
        },
        removeFavorite: (state, action: PayloadAction<any>) => {
            return state.map((item) =>
                item.id === action.payload ?
                    { ...item, favorite: false } : item
            )
        },
        addBag: (state, action: PayloadAction<any>) => {

            return state.map((item) =>
                item.id === action.payload.id ?
                    { ...item, bag_count: action.payload.bag_count + 1, total_price: action.payload.bag_count * item.price } : item
            )
        },
        removeBag: (state, action: PayloadAction<any>) => {

            return state.map((item) =>
                item.id === action.payload.id ?
                    { ...item, bag_count: action.payload.bag_count - 1, total_price: action.payload.bag_count * item.price } : item
            )
        },

    }
})

export default productSlice.reducer;
export const { addFavorite, add, removeFavorite, addBag, removeBag } = productSlice.actions