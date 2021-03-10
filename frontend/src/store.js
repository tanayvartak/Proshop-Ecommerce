import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
<<<<<<< HEAD
import { productListReducers, productDetailsReducers } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'


const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer
})

const cartItemsFromStrorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems: cartItemsFromStrorage }
}
=======
import { productListReducers } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducers,
})

const initialState = {}
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store