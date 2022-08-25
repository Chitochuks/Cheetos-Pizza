import { type } from "express/lib/response"

export const addToCart = (pizza , quantity , variant) => (dispatch , getState) => {

    var cartItem = {
        name : pizza.name , 
        _id : pizza._id,
        image : pizza.image,
        variant : variant,
        quantity : quantity,
        prices : pizza.prices ,
        price: pizza.prices[0][variant] * quantity

    }


    dispatch({type:'ADD_TO_CART' , payload : cartItem})

    const cartItems = getState().cartReducer.cartItems
    window.localStorage.setItem('cartItems' , JSON.stringify(cartItems))

}

// export const deleteFromCart=(pizza)=>dispatch=>{

//     dispatch({type: 'DELETE_FROM_CART' , payload: pizza})
    
// }