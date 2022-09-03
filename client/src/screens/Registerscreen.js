import React , {useState, useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { registerUser } from '../actions/userActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'

export default function Signupscreen() {
    const[name , setName] = useState('')
    const[email , setEmail ] = useState('')
    const[password , setPassword ] = useState('')
    const[cpassword , setCpassword ] = useState('')
    const registerState = useSelector(state =>state.registerUserReducer)
    const {error, loading, success} = registerState;

    const dispatch = useDispatch()
    function register(){

        if(password!=cpassword)
        {
            alert("Passwords not matched")
        }
        else {
            const user={
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }

  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-body rounded'>

                {loading && (<Loading/>)}
                {success && (<Success success="User Registered Successfully"/>)}
                {error && (<Error error=  "Email already Registered"/>)}

                <h2 className='text-center mt-2' style={{fontSize: '35px'}}>SIGN UP</h2>
                <div>
                    <input required type="text" placeholder="name" className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input required type="text" placeholder="email" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input required type="text" placeholder="password" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input required type="text" placeholder="confirm password" className='form-control' value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>
                    <button onClick={register} className='btn mt-3 mb-3'>SIGN UP</button>
                    <br/>
                    <a style={{color : 'black' , textDecoration: 'none'}} href='/login'>Click Here To Login</a>
                
                </div>



            </div>

        </div>
    </div>
  )
}
