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
        setInputs({
            ...inputs, [name]: value
        })
        alert(`입력한 이름 ${document.getElementById("name").value}`)
        
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        alert(` username : ${inputs["name"]}`)
        }
        /*
        axios.get(`http://localhost:8080/member/bmi`)
            .then((res)=>{
                alert(`New message [내용] ${JSON.stringify(res.data)}`)
            })*/
    
    



    return (<Layout>
        <form>
        <h1>Bmi form</h1>
   
    
    <div>
    <label><b>Username</b></label>
    <input type="text" id="name" onChange={handleChange}/><br />

    <label htmlFor=""><b>height</b></label>
    <input type="text" onChange={handleChange} /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="text" onChange={handleChange} /><br />
    
    <input type="button" onClick={handleClick} value="BMI 체크" /><br />
    </div> 
    </form>
   
    </Layout>)
}