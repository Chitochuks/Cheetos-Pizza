import React , {useState} from 'react'
import {Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../actions/cartActions';

export default function Pizza({pizza}) {
    const [ quantity, setQuantity ] = useState(1)
    const [ variant, setVariant ] = useState('small')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart() 
    {
        dispatch(addToCart(pizza , quantity, variant))
    }

    return (
        <div className='shadow-lg p-3 mb-5 bg-white rounded'>

            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{height: '200px',  width: '200px'}}/>
            </div>

            <div className='flex-container'>

                <div className='w-100 m-1'>
                    <p>Variants</p>
                    <select className='form-select' value={variant} onChange={(e) => {setVariant(e.target.value)}}>
                    {pizza.variants.map(variant => {
                        return <option value={variant}>{variant}</option>
                    })}</select>
                    
                </div>

                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-select' value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x, i) => {

                        return <option value={i+1}>{i+1}</option>

                    })} 
                    </select>
                </div>

            </div>


            <div className='flex-container'>

                <div className='m-1 w-100 '>
                    <h1 className='mt-1'>Price: {pizza.prices[0][variant] * quantity} ₦/-</h1>

                </div>


                <div className='m-1 w-100'>
                    <button className='btn' onClick={addtocart}>ADD TO CART</button>

                </div>

            </div>
                    
                
            
            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>
                {pizza.name}
                </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{height: '400px'}}/>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}
