import React , {useState} from 'react';
import { PaystackButton } from "react-paystack";

export default function Checkout({subtotal}) {

  const publicKey ='pk_test_ead1ac8b8838e83e9a70188ae72ec2d5c9e68166'
  const amount =  (subtotal * 100)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with Cheetos Pizza! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }
  function tokenHandler (token) 
  {
    console.log(token);
  }

  
  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img />
          <div className="item-details">
            <p>Dancing Shoes</p>
            {/* <p>{amount}</p> */}
          </div>
        </div>
        <div className="checkout-form" token = {<tokenHandler/>}>
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
        </div>
        <PaystackButton 
            {...componentProps}
            ></PaystackButton>
      </div>
    </div>
  )
}

