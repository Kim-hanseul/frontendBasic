import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'
import Layout from '../containers/Layout';
export default function Grade(){
    const[name,setName]=useState("");
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
    
    </Layout>
}
;