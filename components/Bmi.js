import React, {useState} from 'react' 
import Layout from '../containers/Layout';
import axios  from 'axios';
import { useLinkClickHandler } from 'react-router-dom';
export default function Bmi(){

    const [inputs, setInputs ] = useState({})
    const{name, weight, height} = inputs; // Object Destructuring
    
    const handleChange =(e)=> {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({...inputs, [name]: value})
        
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        alert(` username : ${JSON.stringify(bmiRequest)}`)
        
        /*
        axios.get(`http://localhost:8080/member/bmi`)
            .then((res)=>{
                alert(`New message [내용] ${JSON.stringify(res.data)}`)
            })*/
        }
    
    



    return (<Layout>
        <form>
        <h1>Bmi form</h1>
   
    
    <div>
    <label><b>Username</b></label>
    <input type="text" name="name" onChange={handleChange}/><br />

    <label htmlFor=""><b>height</b></label>
    <input type="text" name="height" onChange={handleChange} /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="text" name="weight" onChange={handleChange} /><br />
    
    <button onClick={handleClick}>Bmi check</button>
    </div> 
    </form>
   
    </Layout>)
}