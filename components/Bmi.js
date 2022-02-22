import React, {useState} from 'react'
import Layout from "../containers/Layout";
export default function Bmi(){
    const[name,setName]=useState("")
    const[height,setHeight]=useState(0)
    const[weight,setWeight]=useState(0)
    const sum =()=>{
        let name = document.getElementById("name").value
        let height = document.getElementById("height").value
        let weight = document.getElementById("weight").value
        setName(name)
        setHeight(height)
        setWeight(weight)
    }


    return<Layout><h1>BMI form</h1>
    
    
    <div>
    <label htmlFor="">name</label><br />
    <input id = "name" type="" /><br />
    <label htmlFor="">height</label><br />
    <input id = "height" type="" /><br />
    <label htmlFor="">weight</label><br />
    <input id = "weight" type="" /><br />
    <button onClick={()=>{sum()}}> 결과</button><br />
    <div> result : {name} , {height} , {weight} </div>

    </div>
    
    </Layout>
}
