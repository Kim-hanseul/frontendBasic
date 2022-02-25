import React, {useState} from 'react'
import Layout from '../containers/Layout'
export default function Login(){
    const [inputs, setInputs ] = useState({})
    const{id, password} = inputs; // Object Destructuring
    
    const handleChange =(e)=> {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({...inputs, [name]: value})
        
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        const calcRequest = {id,password}
        alert(` insert result : ${JSON.stringify(calcRequest)}`)
        
    }
    return (<Layout>
        <form>
        <h1>login form</h1>
   
    
    <div>
    <label><b>ID</b></label>
    <input type="text" name="id" onChange={handleChange}/><br />

    <label htmlFor=""><b>PASSWORD</b></label>
    <input type="text" name="password" onChange={handleChange} /><br />

    
    <button onClick={handleClick}>Login result</button>
    </div> 
    </form>
   
    </Layout>)
   
   
    /* return <Layout><h1>로그인폼</h1>
    <form>
    <div>
    <label><b>Username</b></label>
    <input type="" /><br />

    <label htmlFor=""><b>Password</b></label>
    <input type="" /><br />

    <button>Login</button><br />
    <label><input type="checkbox" />Remember me</label><br />
    
    
    </div>
    <div>
    <button>Cancel</button><br />
    <span>Forgot <a>password?</a></span>
    </div>
    </form>
    </Layout>*/
}
