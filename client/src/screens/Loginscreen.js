import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Loginscreen() {



  const[email , setEmail ] = useState('')
  const[password , setPassword ] = useState('')
  const loginState = useSelector(state=>state.loginUserReducer)
  const {loading, error} = loginState
  const dispatch = useDispatch()


  useEffect(() => {

    if(window.localStorage.getItem('currentUser'))
    {
      window.location.href='/'
    }
  }, [])

  function login() {
    const user = {email , password}
    dispatch(loginUser(user))
  }
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-body rounded'>
                <h2 className='text-center mt-2' style={{fontSize: '35px'}}>LOGIN</h2>
                {loading &&  (<Loading/>)}
                {error && (<Error error="Invalid Credentials"/>)}
                <div>
                    <input required type="text" placeholder="email" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input required type="text" placeholder="password" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button onClick={login} className='btn mt-3 mb-3'>Login</button>
                    <br/>
                    <a style={{color: 'black' , textDecoration: 'none'}} href='/register' className='mt-2'>Click Here to Register</a>
                </div>

            </div>

        </div>
    </div>
  )
}
