import React,{useState} from 'react'

const Contador = () => {
    
    const [ clicks, setClicks] = useState(0)
        const stock=19
        const addClick = () =>{
            if(clicks< stock)
          setClicks(clicks+1)
        
        }
        const removeClick = () =>{
          if(clicks>0)
        setClicks(clicks-1)
        }

    return (
        <div>
            
        </div>
    )
}

export default Contador
