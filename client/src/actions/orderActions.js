import axios from "axios";

export const placeOrder = (subtotal)=>(dispatch , getState)=>{

    dispatch({type: 'PLACE_ORDER_REQUEST'})

    try {


        const response = await axios.post('/api/orders/placeorder' , )


    } catch (error) {

    }

}