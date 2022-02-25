import React,{useState} from 'react' 
import { memberCalc } from '../api';
import Layout from '../containers/Layout'

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1, opcode, num2} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberCalc({num1, opcode ,num2}).then(res => setResult(res.data)).catch( err => console.log(`error : ${err}`))
    }
    return <Layout><h1>Calc form</h1>
    <form action=""> 
    <label><b>num1</b></label>
    <input name ="num1" type="text" onChange={handleChange} /><br />

    <label htmlFor=""><b>opcode</b></label>
    <select name="opcode" id=""onChange={handleChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
    </select>
    
    <br />

    <label htmlFor=""><b>num2</b></label>
    <input name="num2" type="text" onChange= {handleChange} /><br />

    <button onClick={handleClick}>start calc</button>
    </form>
    <div>result : {result}</div>


    </Layout>
}