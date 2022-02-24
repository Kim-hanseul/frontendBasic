import React, {useState} from 'react' 
import Layout from '../containers/Layout';
import axios  from 'axios';
export default function Bmi(){

    const [name, setName] = useState('')
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const getBmi = (e) => {
        e.preventDefault()
        alert(` 버튼 클릭 `)
        axios.get(`http://localhost:3000/member/bmi/김한슬/177.4/73.2`)
            .then((res)=>{
                alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
            })
    }


    return (<Layout><h1>Bmi폼</h1>
   
    
    <div>
    <label><b>Username</b></label>
    <input type="" /><br />

    <label htmlFor=""><b>height</b></label>
    <input type="" /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="" /><br />
    
    <input type="button" onClick={getBmi} value="BMI 체크" /><br />
    </div> 
    
   
    </Layout>)
}