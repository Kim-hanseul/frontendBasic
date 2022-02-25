import {memberGrade} from '../api'
import React, {useState} from 'react'
import Layout from '../containers/Layout';

export default function Grade(){
    const [inputs, setInputs ] = useState({})
    const [result, setResult] = useState('')
    const{name, kor, eng, math} = inputs; // Object Destructuring
    
    const handleChange =(e)=> {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({...inputs, [name]: value})
        
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        memberGrade({name, kor, eng, math}).then(res=>setResult(res.data)).catch(err=>console.log(`error : ${err}`))
        
        
    }
    return (<Layout>
        <form action="">
        <h1>Grade form</h1>
   
    
    
    <label><b>student name</b></label>
    <input type="" name="name" onChange={handleChange}/><br />

    <label htmlFor=""><b>kor grade</b></label>
    <input type="" name="kor" onChange={handleChange} /><br />

    <label htmlFor=""><b>eng grade</b></label>
    <input type="" name="eng" onChange={handleChange} /><br />

    <label htmlFor=""><b>math grade</b></label>
    <input type="" name="math" onChange={handleChange} /><br />
    
    <button onClick={handleClick}> enter </button>
     </form>
     <div>result : {result} </div>
   
    </Layout>)
    
    
    
    
    
    /* const[name,setName]=useState("");
    const[kor,setKor]=useState(0);
    const[eng,setEng]=useState(0);
    const[math,setMath]=useState(0);
    const sum=()=>{
        let name = document.getElementById('name').value
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
    }
    return <Layout><h1>Grade form</h1>
    
        <div>
            <label><b>name</b></label><br/>
            <input id="name" type="" /><br />
            <label htmlFor=""><b>kor score</b></label><br/>
            <input id="kor" type="" /><br />
            <label htmlFor=""><b> eng score </b></label><br/>
            <input id="eng" type="" /><br />
            <label htmlFor=""><b>math score </b></label><br/>
            <input id="math" input type="" /><br />
            <button onClick={()=>{sum()}}> Enter </button><br />
            <div> PROFILE : {name} , {kor} , {eng} , {math} </div>
        </div>
    
    </Layout>*/ 
}
