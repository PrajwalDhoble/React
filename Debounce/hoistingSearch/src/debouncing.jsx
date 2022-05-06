import axios from 'axios'
import React from 'react'

export const Debouncing =()=>{

    const [data,setData] = React.useState([]);
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState(false)
    
    const value = React.useRef();
    let id =null;

    const Debounce=(func,delay)=>{
        setLoading(true)
        if(id){
            clearTimeout(id);
        }
        id = setTimeout(()=>{
            func();
        },delay)
    }

    const handleChange=()=>{
        setLoading(false)
        var input = value.current.value;

        if(input==""){
            setData([])
            setError(false)
            return
        }
        axios.get(`https://jsonplacehoder.typicode.com/photos?q=${input}`).then((res)=>{
            if(res.data.length==0){
                setData([{id:"0",title:"No Result Found"}])
            }
            else{
                setData(res.data)
            }
        }).catch((err)=>{
            setError(true)
        })
    }

    return(
        <div>
            <input id="text" type="text" ref={value} onInput={()=>Debounce(handleChange,2000)}/>

            {loading? <p>LOADING.....</p>:
            error? <p>Error Occurred</p> :
            <div>
                {data.map((e)=>
                    <div key ={e.id}>
                        <p>{e.title}</p>    
                    </div>
                )}
            </div>
            }
        </div>
    )
}